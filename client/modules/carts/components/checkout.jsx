import React from 'react';
import CheckoutForm from './checkout_form.jsx';


class Checkout extends React.Component{

handlePurchaseSubmit(clientInfo){
 const {cartItems, addOrder} = this.props;
 addOrder(cartItems, clientInfo);
}

 render(){

  return (
   <div className="checkout">
     <CheckoutForm onPurchaseSubmit={this.handlePurchaseSubmit.bind(this)}/>
   </div>
  );
 }
}


export default Checkout;
