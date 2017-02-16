import React, { Component } from 'react';



class Register extends Component {
  render() {
    return (
    	<div>
    		<div className='col-xs-12'>

    			<div className='col-xs-7 col-xs-offset-4 margin-above'>
	    			<form>
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

export default Register;
