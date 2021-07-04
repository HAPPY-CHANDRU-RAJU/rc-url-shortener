const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const path = __dirname + '/views/';
const app = express();

app.use(express.static(path));

var corsOptions = {
  "proxy": "http://localhost:3001"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require(__dirname +'/models/url.model');


//ATLAS_URI=mongodb+srv://happie2110:mageshram@2110@cluster0.mmn01.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const uri = process.env.ATLAS_URI;

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://happie2110:mageshram@2110@cluster0.mmn01.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:true, autoIndex : true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//app.use('/', require('./routes/url')); 
app.use('/', require('./routes/url')); 

app.get('/*', function (req,res) {
  res.sendFile(path + "index.html");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
