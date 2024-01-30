const mongoose = require('mongoose');   //import mongoose
const ProductSchema = new mongoose.Schema({   //create schema
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    qtyOnHand: {
        type: Number,
        required: true
    }

});
ProductSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('product', ProductSchema);   //export model
