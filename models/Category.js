const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

let categorySchema = mongoose.Schema({
    name: { type: types.String, required: true, unique: true },
    creator: { type: types.ObjectId, ref: 'User', required: true },
    products: [ { type: types.ObjectId, ref: 'Product' } ]
});

let Category = mongoose.model('Category', categorySchema);

module.exports = Category;