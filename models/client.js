/*
	File: client.js
	Located: models
	Description: This file is a model od clients
*/
var mongoose = require('mongoose'), Schema = mongoose.Schema;

var clientSchema = new Schema({
	id: String,
    name: String,
    surname: String,
    birhtday: { type: Date, default: Date.now },
    phone: String,
    country: String,
    address: String,
    height: Number, 
    weight: Number, 
    startDate: { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('Client', clientSchema);