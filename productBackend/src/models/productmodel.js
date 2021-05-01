const mongoose =require("mongoose");
mongoose.connect('mongodb://localhost:27017/productapp');
const Schema= mongoose.Schema;


const ProductSchema = new Schema({
    name:String,
    price:Number,
    quantity:Number,
    category:String
});

var productdata = mongoose.model('productdata', ProductSchema);

module.exports = productdata;