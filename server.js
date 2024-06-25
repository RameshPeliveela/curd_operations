var express = require('express');
var db = require('./db');
var bodyParser = require('body-parser');
var class10Router = require('./routers/class10Router');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Welcome to node.Js server how can i help you");
})

app.use('/class10', class10Router);
app.listen(3000);
