import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//bring in login action
import LoginAction from '../Actions/LoginAction.js';

class Login extends Component {
	constructor(props) {
		super(props);
		this.logUserIn = this.logUserIn.bind(this);
	}

	logUserIn(event){
	    event.preventDefault(); 
		var usernameAtLogin = event.target[0].value;
    	var passwordAtLogin = event.target[1].value;
    	// console.log(usernameAtLogin, passwordAtLogin);
    	this.props.loginAction({
    		usernameAtLogin: usernameAtLogin,
    		passwordAtLogin: passwordAtLogin 
    	});
	}

	render() {
		//RK Start Here
		console.log(this.props.loginResponse.msg);
    	return (

    		<div>

    			<h1>{this.props.loginResponse.msg}</h1>
				<form onSubmit={this.logUserIn}>
					<input type='text' name='userName' placeholder='Username' />
					<input type='password' name='password' placeholder='password'  />
					<input type='submit' value='Login!' />
				</form>    	
			</div>
    );
  }
}



function mapStateToProps(state){
	return(
		{
			loginResponse: state.login
		}
	)
}
//need to get access to the login action - so I need to bring in mapdispatch to props. loginAction will give me access to the action
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
