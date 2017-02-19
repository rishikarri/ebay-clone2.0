import React, { Component } from 'react';
import { connect } from 'react-redux'; // need react to be able to talk to redux
import { bindActionCreators } from 'redux'; //come back to this but I know i need this for map dispatch to props
import RegisterAction from '../Actions/RegisterAction.js';




class Register extends Component {
  constructor(props) {
    super(props);
    this.registrationSubmit = this.registrationSubmit.bind(this);

  }
  registrationSubmit(event){
    event.preventDefault(); 
    var username = event.target[0].value;
    var password = event.target[1].value;

    // console.log(username, password);  
    // console.log('hi');
    this.props.registerAction({
      usernameEntered: username,
      passwordEntered: password

    })

      



    
  }

  render() {
    console.log(this.props);
    return (
    	<div>
    		<div className='col-xs-12'>
          <h1> {this.props.registerResponse.msg}</h1>
    			<div className='col-xs-7 col-xs-offset-4 margin-above'>
	    			<form onSubmit={this.registrationSubmit}>
	    				<input type='text' name='userName' placeholder='Username' />
	    				<input type='password' name='password' placeholder='password'  />
	    				<input type='submit' value='Register!' />
	    			</form>
	    		</div>
    		</div>
		</div>
    );
  }
}

//return bind action creators which takes an object. Giving the prop reegister action to this component so that I can call it on submit
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    registerAction: RegisterAction
  }, dispatch)
}

function mapStateToProps(state){
  return{
    registerResponse: state.register
  }
}
//now rather than exporting the actual component, we need to export the connection - come back to this later but what I do know is that this allows me to give props to this component

export default connect(mapStateToProps, mapDispatchToProps)(Register)

