
// listen for actions, if you get an action type that matches register, fire the payload, otherwise just return the state which is an empty array

// return an empty array if i'm not called otherwise return action.payload wihich is a piece of state and has data

export default function(state = [], action){
	
	switch(action.type){
		case 'LOGIN':
			console.log('hiiii! I am a login reducer an action called me');
			console.log(action.payload);
			return action.payload;
	}

	return state;
}
