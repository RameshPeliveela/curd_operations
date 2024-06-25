var mongoose = require('mongoose');

const url = "mongodb://localhost:27017/mydb";
mongoose.connect(url,{useNewUrlParser:true,  useUnifiedTopology:true})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("database is connected successfully")
})

db.on('disconnected', ()=>{
    console.log("data base is disconnected")
});

db.on('error', ()=>{console.log("Error in connectiing database")});

module.exports = db;