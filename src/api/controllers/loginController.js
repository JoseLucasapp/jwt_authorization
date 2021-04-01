module.exports.login = (req, res)=>{
    const DAO = require('../models/LoginModel')();
    const Login = new DAO;
    Login.login(req, res);
}