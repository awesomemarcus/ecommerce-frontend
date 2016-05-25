import React from 'react';
import CartsItem from './carts_item.jsx';

class CartsList extends React.Component{

 countTotalPrice(cartItems){
  var total = 0;

  cartItems.map( Item => {
   total += parseInt(Item.price);
  });

  return total;
 }

 render(){

  const {cartItems, totalPrice} = this.props;

  return (
   <div className="cartsList">
    <table className="table table-hover">
     <thead>
      <tr>
       <th>Product Name</th>
       <th>Price</th>
       <th>Quantity</th>
      </tr>
     </thead>
     <tbody>
      {cartItems.map( item => (
       <CartsItem key={item._id} item={item}/>
      ))}
     </tbody>
    </table>
    <p>Total Items: {cartItems.length}</p>
    <p>Total Price: {totalPrice(cartItems)}</p>
   </div>
  );
 }
}


export default CartsList;
