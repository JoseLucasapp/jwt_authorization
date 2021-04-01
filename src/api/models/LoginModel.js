const {DbSchema} = require('../../config/db/dbSchema');
const {sign} = require('../../config/jwt');

function Login(){

}

Login.prototype.login = async(req, res)=>{
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
}

module.exports = ()=>{
    return Login;
}