import $ from 'jquery';

export default function(loginData){
	// let's wait on the ajax request for now  - let's make sure the reducer works 
	var thePromise = $.ajax({
		method: "Post",
		url: "http://localhost:3000/login",
		data: loginData
	});

	return(
		{
			type: "LOGIN",
			payload: thePromise
		}	
	)
}