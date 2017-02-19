import React, { Component } from 'react';


class SignInSection extends Component {
  render() {
    return (

    <div>	
      <div className='col-xs-3'>
      	Hi! <a href='/login'>Sign in</a> or <a href='register'>register</a>
      </div>

      <div className='col-xs-3'>
      	Help & Contact 
      </div>

      <div className='col-xs-3'>
      	Sell Something
      </div>
     </div>
    );
  }
}

export default SignInSection;
