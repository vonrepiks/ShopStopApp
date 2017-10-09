let isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.path === '/category/add' && req.method === 'GET') {
            isInRole('Admin', req, res, next);
        } else {
            next();
        }
    } else {
        res.redirect('/user/login');
    }
};

let isAlreadyLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect(`/?error=${encodeURIComponent('Please first logout before log in/register again!')}`);
        return;
    } else {
        next();
    }
};

let isInRole = (role, req, res, next) => {
    if (req.user && req.user.roles.indexOf(role) > -1) {
        next();
    } else {
        res.redirect(`/?error=${encodeURIComponent('You are not have permission to add category!!!')}`);
        return;
    }
};

module.exports = {
    isAuthenticated: isAuthenticated,
    isAlreadyLoggedIn: isAlreadyLoggedIn,
    isInRole: isInRole
};
