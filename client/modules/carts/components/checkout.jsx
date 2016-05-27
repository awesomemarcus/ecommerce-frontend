import React from 'react';
import CheckoutForm from './checkout_form.jsx';


class Checkout extends React.Component{

handlePurchaseSubmit(clientInfo){
 const {cartItems, addOrder, totalPrice} = this.props;

 const totalAmount = totalPrice(cartItems);
 addOrder(cartItems, clientInfo, totalAmount);
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
