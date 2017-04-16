var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var newuser = require('../models/index');





router.post('/login', function(req, res) {
	newuser.find({username: req.body.username}, function(err, user) {
		if (!user) {
			res.render('/login', { error: 'Invalid email or password.'});
		} else { 
			if (req.body.password === user.password){
				res.redirect('/profile');
			} else {
				res.render('/login', {error: 'Invalid email or password.'});
			}
		}
	});
});













/*
router.post('/login', function(req, res) {
	newuser.findOne({username: req.body.username}, function(err, user) {
		if (!user) {
			res.render('/login', { error: 'Invalid email or password.'});
		} else { 
			if (req.body.password === user.password){
				res.redirect('/profile');
			} else {
				res.render('/login', {error: 'Invalid email or password.'});
			}
		}
	});
});
*/



module.exports = router;