'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3000;

mongoose.connect('mongodb://localhost/gymmanage', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('The connection to the DB was successfully...');  
        
        app.listen(port, function(){
            console.log("The server is running on the port number: " + port);
        })
    }
});