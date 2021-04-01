module.exports.usersList = (req, res)=>{
    const DAO = require('../models/UsersListModel')();
    const UsersList = new DAO;
    UsersList.usersList(req, res);
}