const authMiddleware = require('../middlewares/authMiddleware')

module.exports = (app)=>{
    app.get('/login', async(req, res)=>{
        require('../controllers/loginController').login(req, res);
    })

    app.post('/newuser', async(req, res)=>{
        require('../controllers/newUserController').newUser(req, res);
    });

    app.get('/users',authMiddleware, async(req, res)=>{
        require('../controllers/usersListController').usersList(req, res);
    });

    app.get('/me',authMiddleware, async(req, res)=>{
        res.send(req.auth)
    })
}