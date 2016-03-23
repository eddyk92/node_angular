var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
	knex.select().table('users').then(function(users) {
		res.json(users);
	});
});

router.get('/:id', function(req, res, next) {
	knex.select().table('users').where({id: req.params.id}).then(function(users) {
		res.json(users);
	});
});

router.post('/', function(req, res, next) {
	knex('users').insert(req.body).then(function(insert) {
		knex.select().table('users').then(function(users) {
			res.json(users);
		});
	});
});

router.put("/:id", function(req, res, next) {
	knex('users').update(req.body).where({"id" : req.params.id}).then(function(insert) {
		knex.select().table('users').then(function(users) {
			res.json(users);
		});
	});
}).delete(function(req, res, next) {
	knex('users').where({"id":req.params.id}).del();
});

module.exports = router;