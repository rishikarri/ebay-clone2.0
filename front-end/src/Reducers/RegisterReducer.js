
// listen for actions, if you get an action type that matches register, fire the payload, otherwise just return the state which is an empty array
export default function(state = [], action){
	
	switch(action.type){
		case 'REGISTER':
			console.log('hiiii! I am a register reducer an action called me');
			// console.log(action.payload);
			return action.payload;
				
	}

	return state;
}
