import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewItemsForSaleAction from '../Actions/ViewItemsForSaleAction.js';
import { bindActionCreators } from 'redux';
import $ from 'jquery';


class ViewItemsForSale extends Component {
	constructor(props) {
		super(props);
		this.retrieveImages = this.retrieveImages.bind(this);
	}

	componentWillUpdate(nextProps, nextState) {
		// console.log(nextProps);
	}

	retrieveImages(){
		// console.log('hi hi hi');

		//Rk start here
		
		this.props.viewItemsForSaleAction({

		})
	}

	makePayment(){
		var handler = window.StripeCheckout.configure({
			key: 'pk_test_kWiECGdRJDV6Ei31xwpSCFym',
			locale: 'auto',
			token: function(stripeToken){
				console.log(stripeToken);
				var theData = {			
					amount: 10 * 100,
					stripeToken: stripeToken.id,
					token: localStorage.getItem('token') 		
				}
				$.ajax({
					method: 'POST',
					url: 'http://localhost:3000/stripe',
					data: theData
				}).done((data)=>{
					console.log("Express response and the response is....")
					console.log(data);
				})
			}

		});

		//
		handler.open({	
			name: "Buy stuff from my auction site",
			description: "Pay your auction",
			amount: 23 * 100

		})
	}
 	render() {
 		// console.log(this.props.viewItemsForSaleResponse.vModaURL)

 		var vModaURL = this.props.viewItemsForSaleResponse.vModaURL
 		// console.log(this.props);
	    return (
	      <div>
	      	<div> <button onClick={this.retrieveImages}>View items for sale</button></div>

	      	<img src= {vModaURL} height="200px" width="200px"/>
	      	<button className='btn btn-primary' onClick={this.makePayment}>Buy</button>
	      </div>
	    );
	}
}

// <a href='/viewItemsForSale'><button onClick={this.retrieveImages}>View items for sale</button></a>
// export default ViewItemsForSale;



function mapDispatchToProps(dispatch){
  return bindActionCreators({
    viewItemsForSaleAction: ViewItemsForSaleAction
  }, dispatch)
}

function mapStateToProps(state){
	return{
		viewItemsForSaleResponse: state.viewSaleItems
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewItemsForSale)