const authController = {};

authController.loginGet = (req, res) => {
    res.send('login GET');
}

authController.loginPost = (req, res) => {
    res.send('login POST');
}

authController.signupGet = (req, res) => {
    res.send('signup GET');
}

authController.signupPost = (req, res) => {
    res.send('signup POST');
}

module.exports = authController;
