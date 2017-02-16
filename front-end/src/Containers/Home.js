import React, { Component } from 'react';

// bring in containers i will use
import SignInSection from '../Containers/SignInSection.js';
import SearchBarSection from '../Containers/SearchBarSection.js';
import AdSection from '../Containers/AdSection.js';
import ViewItemsForSale from '../Containers/ViewItemsForSale.js';
import SellSomething from '../Containers/SellSomething.js';



class Home extends Component {
  render() {
    return (
		<div>
			<div className='col-xs-12'>
				<SignInSection />
			</div>

			<div className='col-xs-12 margin-above'>
				<SearchBarSection />
			</div>

			<div className='col-xs-12'>
				<AdSection />
			</div>

			<div className='col-xs-12'>
				<div className='col-xs-6'>
					<ViewItemsForSale />
				</div>
				<div className='col-xs-6'>
					<SellSomething />
				</div>
			</div>
		</div>
    );
  }
}

export default Home; 

