const User = require('../models/User')
const jwt = require('jsonwebtoken')

const authController = {};

const handleErrors = (err) => {

    let errors = {};

    // Duplicate Error Code
    if (err.code === 11000) {
        errors.email = 'Email already exist';
        return errors;
    }

    // Validation Errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

authController.loginGet = (req, res) => {
    res.render('login');
}

authController.loginPost = (req, res) => {
    res.send('login POST');
}

authController.signupGet = (req, res) => {
    res.render('signup');
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'secret_id', {
        expiresIn: maxAge
    })
}

authController.signupPost = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors });
    }
}

module.exports = authController;
