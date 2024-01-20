const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: [{
        productId: {
            type: Object,
            required: true
        },
        qty: {
            type: Number,
            required: true
        }
    }]
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
