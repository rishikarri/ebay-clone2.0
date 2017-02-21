var express = require('express');
var router = express.Router();
var config = require('../Config/config.js');
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var randtoken = require('rand-token');

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

router.post('/login', function(req, res, next){
	var usernameAtLogin = req.body.usernameAtLogin;
	var passwordAtLogin = req.body.passwordAtLogin;
	// console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
	// console.log(usernameAtLogin, passwordAtLogin);
	// console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');

	pool.getConnection((err, connection)=>{
		var findUserQuery = "SELECT password FROM users WHERE username = ?"
		connection.query(findUserQuery, [usernameAtLogin], (error, results, fields)=>{
			console.log(results);
			if (results.length === 0){
				//we know a user with that name doesn't exist
				res.json({
					msg: "Sorry - no user exists with that name"
				})
			}else{
				// now we know the user exists because results.length > 0 

				var checkHash = bcrypt.compareSync(passwordAtLogin, results[0].password)//this will evaluate to true or false - false if the password is incorrect
				if (checkHash){
					//we have a match - the user entered the correct password
					//generate a token
					console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
					var token = randtoken.uid(40);
					console.log(token);
					console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
					var insertToken = "UPDATE users SET token=? WHERE username=?"
					res.json({
						msg: "Correct username and password! You have been logged in!"

					})
				}else{
					res.json({
						msg: "A user with that name exists! However, that is the incorrect password"

					})	
				}
				
			}
		})
		connection.release();
		// res.send('hi')
	})
	// res.json({
	// 	msg: 'it is lit'
	// })
})

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
				connection.query(insertUserQuery, [usernameToPutInDatabase, bcrypt.hashSync(passwordToPutInDatabase)], (error2, results2)=>{
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
