/*
	File: client.js
	Located: controller
	Description: This file is a controller of clients
*/
'use strict'

var Client = require("../models/client");

function test(req, res){
    res.status(200).send({
        message: 'This is a test from user controller, this is the first acction'
    });
}

function addClientGet(req, res){
    res.render('../views/pages/client/frmAddClient');
}

function addClientPost(req, res){
    var client = new Client();

    //Validating data
    req.checkBody('frmAddClientId', 'Invalid ID').notEmpty();
    req.checkBody('frmAddClientName', 'Invalid Name').notEmpty();

    req.getValidationResult().then(function(result){

        if(!result.isEmpty()){
            console.log(result.array());
        }else{
            console.log('pass');
            res.render('../views/pages/client/frmAddClient');
        }
   });
/*
    var     errors = req.getValidationResult();
    if (errors) {
        // Render the form using error information
        console.log(errors.array());
        res.status(200).send(errors.array());
        return;
        //res.render('../views/pages/client/frmAddClient');
    }
    else {
       // There are no errors so perform action with valid data (e.g. save record).
       console.log(req.body.frmAddClientId + " -- " + req.body.frmAddClientName);
       res.render('../views/pages/client/frmAddClient');
    }

	
    
    client.id = req.body.frmAddClientId;
    client.name = req.body.frmAddClientName;
    console.log(req.body.frmAddClientId + " -- " + req.body.frmAddClientName);
    */




    /*
    client.surname = 'Badilla';
    //client.birhtday = '';
    client.phone = '87063990';
    client.country = 'Costa Rica',
    client.address = 'San Rafael de Santa Ana';
    client.height = 170;
    client.weight = 91.5;
    //client.startDate = '';
    */



    /*
	client.id = '114350445';
	client.name = 'Jose';
    client.surname = 'Badilla';
    //client.birhtday = '';
    client.phone = '87063990';
    client.country = 'Costa Rica',
    client.address = 'San Rafael de Santa Ana';
    client.height = 170;
    client.weight = 91.5;
    //client.startDate = '';

    


	//Save data
    client.save((err, clientStored) => {
        if(err){
            res.status(500).send({message : 'Error saving the client, please try again!.'});
        }else{
            if(!clientStored){
                res.status(404).send({message : "The client can't be saved, please try again."});
            } else{
                res.status(200).send({'Client' : clientStored});
            }
        }
    });

    */
}

module.exports = {
    test,
    addClientGet,
    addClientPost

};