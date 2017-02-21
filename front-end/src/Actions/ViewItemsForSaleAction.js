import $ from 'jquery';

// actions return an object which has a type and a payload. The type is what the reducer is going to use to identify whether or not it should run code. the payload is the data actually passed to the reducer 
//this particular action is going to take in some data so that it can make an ajax request to the backend 

export default function(imageData){
	// console.log('test');
	// let's make an ajax request to the backend - later we will use pm2 to deploy properly - 
	var thePromise = $.ajax({
		method: "Get",
		url: "http://localhost:3000/retrieveImages",
		// data: registerData
	});
	console.log('view items for sale action');
	return(
		{
			type: "VIEWSALEITEMS"
			
		}
	)

}

