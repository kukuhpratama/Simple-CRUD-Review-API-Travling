const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TravlingSchema = new Schema({
    name:{
        type:String
    },
    message:{
        type:String
    },
    rating:{
        type:Number
    },
    image:{
        type:String
    }
});

const Travling = mongoose.model("travling",TravlingSchema);
module.exports = Travling;