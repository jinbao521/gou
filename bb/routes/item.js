var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/list', function(req, res) {
	
	res.send([{'news':[
			{title:'母亲节',time:'2017-05-15'},
			{title:'父亲节',time:'2017-05-16'},
			{title:'端午节',time:'2017-05-17'},
			{title:'儿童节',time:'2017-06-01'},
			{title:'八卦节',time:'2017-05-18'}
		]
	}]);
	
});
module.exports = router;