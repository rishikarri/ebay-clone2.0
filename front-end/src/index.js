// We need: 
// 1. Provider ( react- redux)
// 2. createStore (redux)
// 3. reducers to pass to createStore (./reducer) (rootReducer)
// 4. make a root reducer to import other reducers 
// 5. Make a single reducer to import into root reducer
// 6. create the store (2) with the reducer (3) 
// 7. wrap the provider (1) with store prop (4) around the app 



import React from 'react';
import ReactDOM from 'react-dom';

import '../public/stylesheets/styles.css';

//import items from node modules
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';



//import various Containers
import App from './App.js';
import Home from './Containers/Home.js';
import Login from './Containers/Login.js';
import Register from './Containers/Register.js';
import Search from './Containers/Search.js';


//import reducer 
import reducers from './Reducers/index.js';

//create variable with middleware

//multiple callback functions getting the redux brain ready - dive deeper into this on the next go around
const theStorewithMiddleware = applyMiddleware(reduxPromise)(createStore)(reducers);






ReactDOM.render(

<Provider store={theStorewithMiddleware}>
  	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path="login" component={Login} />
			<Route path="register" component={Register} />
			<Route path="search/:term" component={Search} />			
		</Route>
	</Router>
</Provider>,


  document.getElementById('root')
);
