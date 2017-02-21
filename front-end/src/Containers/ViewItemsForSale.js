import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewItemsForSaleAction from '../Actions/ViewItemsForSaleAction.js';
import { bindActionCreators } from 'redux';


class ViewItemsForSale extends Component {
	constructor(props) {
		super(props);
		this.retrieveImages = this.retrieveImages.bind(this);
	}

	retrieveImages(){
		// console.log('hi hi hi');
		this.props.viewItemsForSaleAction({

		})
	}
 	render() {
 		console.log(this.props);
	    return (
	      <div>
	      	<div> <button onClick={this.retrieveImages}>View items for sale</button></div>
	      </div>
	    );
	}
}

// export default ViewItemsForSale;

// <a href='/viewItemsForSale'><button onClick={this.retrieveImages}>View items for sale</button></a>

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    viewItemsForSaleAction: ViewItemsForSaleAction
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ViewItemsForSale)