var mongoose = require('mongoose');

const class10Schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const class10Table = mongoose.model('class10', class10Schema);

module.exports = class10Table;