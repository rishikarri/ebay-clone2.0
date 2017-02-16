import React from 'react';
import ReactDOM from 'react-dom';

import '../public/stylesheets/styles.css';

//import items from node modules
import {Router, IndexRoute, Route, browserHistory } from 'react-router';


//import various Containers
import App from './App.js';
import Home from './Containers/Home.js';
import Login from './Containers/Login.js';
import Register from './Containers/Register.js';
import Search from './Containers/Search.js';



ReactDOM.render(


  	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path="login" component={Login} />
			<Route path="register" component={Register} />
			<Route path="search/:term" component={Search} />			
		</Route>
	</Router>,


  document.getElementById('root')
);
