const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');

const port = process.env.SERVER_PORT | 3000;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

try{
mongoose.connect('mongodb://127.0.0.1:27017/MERNStackDB');
app.listen(port,()=>{
    console.log(`server Started & running on port ${port}`);
})
}catch (e) {
    console.log(e);
}


//=================================
const customerRoute = require('./routes/CustomerRoute');
//const customerRoute = require('./routes/CustomerRoute');
//=================================


app.use('/api/v1/customer',customerRoute);