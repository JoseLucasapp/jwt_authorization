const {DbSchema} = require('../../config/db/dbSchema');
const {sign} = require('../../config/jwt');

function NewUser(){

}

NewUser.prototype.newUser = async(req, res)=>{
    try{
        const result = await DbSchema.create(req.body);
        const {password, ...user} = result.toObject();
        const token = sign({user: user.id})

        res.send({user, token});
    }catch(err){
        res.send(err);
    }
}

module.exports = ()=>{
    return NewUser;
}