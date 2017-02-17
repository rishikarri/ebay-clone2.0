import $ from 'jquery';

// actions return an object which has a type and a payload. The type is what the reducer is going to use to identify whether or not it should run code. the payload is the data actually passed to the reducer 
//this particular action is going to take in some data so that it can make an ajax request to the backend 

export default function(registerData = null){
	console.log('test');
	// let's make an ajax request to the backend - later we will use pm2 to deploy properly - 
	var thePromise = $.ajax({
		method: "Post",
		url: "http://localhost:3000/register",
		data: registerData
	});
	return(
		{
			type: "REGISTER"
			// payload: thePromise
		}
	)

}