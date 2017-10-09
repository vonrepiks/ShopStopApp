const User = require('../models/User');
const encryption = require('../utilities/encryption');

module.exports.registerGet = (req, res) => {
    res.render('user/register');
};

module.exports.registerPost = (req, res) => {
    let user = req.body;

    if (user.password && user.password !== user.confirmedPassword) {
        user.error = 'Passwords do not match';
        res.render('user/register', user);
        return;
    }

    let salt = encryption.generateSalt();
    user.salt = salt;

    if (user.password) {
        let hashedPassword = encryption.generateHashedPassword(salt, user.password);
        user.password = hashedPassword;
    }

    User.create(user).then((user) => {
        req.logIn(user, (err, user) => {
            if (err) {
                res.render('user/register', { error: 'Authentication not working!' });
                return;
            }

            res.redirect(`/?success=${encodeURIComponent("You're successfully register in system!")}`);
        });
    }).catch(error => {
        user.error = 'Please choose another username, this is busy!';
        res.render('user/register', user);
    });
};

module.exports.loginGet = (req, res) => {
    res.render('user/login');
};

module.exports.loginPost = (req, res) => {
    let userToLogin = req.body;

    User.findOne({ username: userToLogin.username }).then(user => {
        if (!user || !user.authenticate(userToLogin.password)) {
            res.render('user/login', { error: 'Invalid credentials' });
        } else {
            req.logIn(user, (err, user) => {
                if (err) {
                    res.render('user/login', { error: 'Authentication not working!'} );
                    return;
                }

                res.redirect(`/?success=${encodeURIComponent("You're successfully logged in!")}`);
            });
        }
    });
};

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
};