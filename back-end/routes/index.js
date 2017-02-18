var express = require('express');
var router = express.Router();
var config = require('../Config/config.js');
var mysql = require('mysql');

var pool = mysql.createPool({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res,next) {

	var checkDuplicateUser = "SELECT * FROM users WHERE username = ?"; 

	pool.getConnection((err, connection)=>{
		console.log(connection);
		var usernameToPutInDatabase = req.body.usernameEntered;
		var passwordToPutInDatabase = req.body.passwordEntered;
		var insertUserQuery = "INSERT INTO users (username, password) VALUES " + "(?, ?)";

		

		// res.json({
		// 	u: usernameToPutInDatabase,
		// 	p: passwordToPutInDatabase
		// })
		connection.query(insertUserQuery, [usernameToPutInDatabase, passwordToPutInDatabase], (error2, results2)=>{
			res.json({
				msg: "User has been inserted into the database"
			});
		})

		connection.release()
	});

	//let's place the username and password into databse
	// console.log(req.body)
	// res.json(req.body);
})
module.exports = router;
