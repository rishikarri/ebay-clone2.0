// inside of my root reducer I first need to bring in the combine reducers method from redux 
// 2. pass it an Object
// 3. each key will be a piece of application state
// 4. each value will be a single reducer

import { combineReducers } from 'redux'; //pass combine reducers an object
import RegisterReducer from './RegisterReducer.js';
import LoginReducer from './LoginReducer.js'

const rootReducer = combineReducers({
	register: RegisterReducer,
	login: LoginReducer
})

export default rootReducer;