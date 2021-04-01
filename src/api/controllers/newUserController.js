module.exports.newUser = (req, res)=>{
    const DAO = require('../models/NewUserModel')();
    const NewUser = new DAO;
    NewUser.newUser(req, res);
}