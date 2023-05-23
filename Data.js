const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  cartItems: {
    type : Object 
  } 
});

module.exports = mongoose.model('Cart', cartSchema);