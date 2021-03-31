const {DbSchema} = require('../config/db/dbSchema');
const {sign, verify} = require('./jwt');

const authMiddleware = async(req, res, next)=>{
    const [, token] = req.headers.authorization.split(' ');
    try{
        const payload = await verify(token);
        const user = await DbSchema.findById(payload.user);
        if(!user){
            res.send(401);
            return;
        }
        req.auth = user;
        next();
    }catch(err){
        res.send(err)
    }
}

module.exports = (app)=>{
    app.get('/login', async(req, res)=>{
        const [, hash] = req.headers.authorization.split(' ');
        const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

        try{
            const user = await DbSchema.findOne({email, password});
            const token = sign({user: user.id})

            if(!user){
                res.send(401);
                return;
            }
            res.send({user, token});

        }catch(err){
            res.send(err);
        }
    })

    app.post('/newuser', async(req, res)=>{
        try{
            const result = await DbSchema.create(req.body);
            const {password, ...user} = result.toObject();
            const token = sign({user: user.id})

            res.send({user, token});
        }catch(err){
            res.send(err);
        }
    });

    app.get('/users',authMiddleware, async(req, res)=>{
        try{
            const users = await DbSchema.find({});
            res.send(users);
        }catch(err){
            res.send(err);
        }
    });

    app.get('/me',authMiddleware, async(req, res)=>{
        res.send(req.auth)
    })
}