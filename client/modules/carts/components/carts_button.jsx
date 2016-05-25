import React from 'react';


class CartsButton extends React.Component{

 setSessionId(){
  if(!Meteor._localStorage.getItem('userId')){
   return Meteor._localStorage.setItem('userId', Random.id());
  }
 }

 handleCartSubmit(e){
  e.preventDefault();
  this.setSessionId();
  const userId = Meteor._localStorage.getItem('userId');
  const {product} = this.props;
  const {addItemToCart} = this.props;

  addItemToCart(userId, product.title, product.price, product.quantity);

 }

 render(){
  return (
   <button className="btn btn-default" onClick={this.handleCartSubmit.bind(this)}>Add to Cart</button>
  );
 }
}

export default CartsButton;
