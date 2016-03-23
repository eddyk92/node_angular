var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
	knex.select().table('spending').then(function(spending) {
		res.json(spending);
	});
});

router.get('/:id', function(req, res, next) {
	knex.select().table('spending').where({id: req.params.id}).then(function(spending) {
		res.json(spending);
	});
});

router.post('/', function(req, res, next) {
	knex('spending').insert(req.body).then(function(insert) {
		knex.select().table('spending').then(function(spending) {
			res.json(spending);
		});
	});
});

router.put("/:id", function(req, res, next) {
	knex('spending').update(req.body).where({"id" : req.params.id}).then(function(insert) {
		knex.select().table('spending').then(function(spending) {
			res.json(spending);
		});
	});
}).delete(function(req, res, next) {
	knex('spending').where({"id":req.params.id}).del();
});

module.exports = router;