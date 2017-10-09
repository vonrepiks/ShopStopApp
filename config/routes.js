const controllers = require('../controllers/union');
const multer =  require('multer');
const auth = require('./auth');

let upload = multer({ dest: './public/product_images' });

module.exports = (app) => {
    app.get('/', controllers.home.index);

    app.get('/product/add', auth.isAuthenticated, controllers.product.addGet);
    app.post('/product/add', auth.isAuthenticated, upload.single('image'), controllers.product.addPost);
    app.get('/product/edit/:id', auth.isAuthenticated, controllers.product.editGet);
    app.post('/product/edit/:id', auth.isAuthenticated, upload.single('image'), controllers.product.editPost);
    app.get('/product/delete/:id', auth.isAuthenticated, controllers.product.deleteGet);
    app.post('/product/delete/:id', auth.isAuthenticated, controllers.product.deletePost);
    app.get('/product/buy/:id', auth.isAuthenticated, controllers.product.buyGet);
    app.post('/product/buy/:id', auth.isAuthenticated, controllers.product.buyPost);

    app.get('/category/add', auth.isAuthenticated, controllers.category.addGet);
    app.post('/category/add', auth.isAuthenticated, controllers.category.addPost);
    app.get('/category/:category/products', controllers.category.productByCategory);

    app.get('/user/register', auth.isAlreadyLoggedIn, controllers.user.registerGet);
    app.post('/user/register', auth.isAlreadyLoggedIn, controllers.user.registerPost);
    app.get('/user/login', auth.isAlreadyLoggedIn, controllers.user.loginGet);
    app.post('/user/login', auth.isAlreadyLoggedIn, controllers.user.loginPost);
    app.post('/user/logout', controllers.user.logout);
};