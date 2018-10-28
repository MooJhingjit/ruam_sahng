const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ruam_sahng', { useNewUrlParser: true });

const verifyToken = require('./Middlewares/verifyToken');
app.all('*', verifyToken, function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', ['Content-Type', 'cache-control', 'x-requested-with', 'Authorization']);
  next();
});
app.use(require('./Routes'));
app.get('/checking', function(req, res){
  res.json({
     "Tutorial": "Welcome to the Node express JWT Tutorial"
  });
});

//listen for requests
const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log(`now listenting on port ${port}...`);
})