
import React, { Component } from 'react';


class SearchBarSection extends Component {
  render() {
    return (
    <div>
		  <div className='col-xs-3'>
		  	<div> 
		  		<img src='../../images/ebayLogo.png' />
		  	</div>
		  </div>

		  <div className='col-xs-7 search-bar-container'>
		  	<form> 
		  		<input type='text' className='search-bar' />
		  	</form>
		  </div>

		  <div className='col-xs-1'>
		  	<button className='btn btn-primary'>Search</button>
		  </div>
     </div>

    );
  }
}

export default SearchBarSection;
