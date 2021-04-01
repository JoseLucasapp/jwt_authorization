const {DbSchema} = require('../../config/db/dbSchema');

function UsersList(){

}

UsersList.prototype.usersList = async(req, res)=>{
    try{
        const users = await DbSchema.find({});
        res.send(users);
    }catch(err){
        res.send(err);
    }
}

module.exports = ()=>{
    return UsersList;
}