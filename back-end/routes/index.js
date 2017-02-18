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

	// let's make a query that is going to check whether or not the user enterd exists in the data base
	// cool 
	//now let's grab the username and password from the req.body 

	var checkDuplicateUser = "SELECT * FROM users WHERE username = ?"; 
	var usernameToPutInDatabase = req.body.usernameEntered;
	var passwordToPutInDatabase = req.body.passwordEntered;

	pool.getConnection((err, connection)=>{
		//if there are no results, that means that we have the green light to enter info into the database. If there are results that means that someonwe with thteat username already exists 
		connection.query(checkDuplicateUser, [usernameToPutInDatabase], (error, results, fields)=>{
			if(results.length === 0){
				var insertUserQuery = "INSERT INTO users (username, password) VALUES " + "(?, ?)";
				connection.query(insertUserQuery, [usernameToPutInDatabase, passwordToPutInDatabase], (error2, results2)=>{
					res.json({
						msg: "User has been inserted into the database"
					});
				})
			}else{
				res.json({
					msg:  "Username has been taken :O !"
				})
			}	
		})
		connection.release();
		
	})

	pool.getConnection((err, connection)=>{
		console.log(connection);
		
		

		

		// res.json({
		// 	u: usernameToPutInDatabase,
		// 	p: passwordToPutInDatabase
		// })
		

		connection.release()
	});

	//let's place the username and password into databse
	// console.log(req.body)
	// res.json(req.body);
})
module.exports = router;
