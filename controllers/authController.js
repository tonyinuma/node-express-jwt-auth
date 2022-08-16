const User = require('../models/User')

const authController = {};

authController.loginGet = (req, res) => {
    res.render('login');
}

authController.loginPost = (req, res) => {
    res.send('login POST');
}

authController.signupGet = (req, res) => {
    res.render('signup');
}

authController.signupPost = async (req, res) => {

    const {email, password} = req.body;
    try {
        const user = await User.create({email, password})
        res.status(201).json(user);
    } catch (e) {
        console.log(e);
        res.status(400).send('Error, User not created');
    }
}

module.exports = authController;
