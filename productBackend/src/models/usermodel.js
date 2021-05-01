const mongoose =require("mongoose");
mongoose.connect('mongodb://localhost:27017/productapp');
const Schema= mongoose.Schema;


const UserSchema = new Schema({
    username:String,
    password:String
});

var Userdata = mongoose.model('userdata', UserSchema);

module.exports = Userdata;