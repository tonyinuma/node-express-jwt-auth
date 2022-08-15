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

authController.signupPost = (req, res) => {
    res.send('signup POST');
}

module.exports = authController;
