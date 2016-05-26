import React from 'react';
import CartsItem from './carts_item.jsx';

class CartsList extends React.Component{


 handleDelete(cartItemId){
   const {deleteItem} = this.props;

   deleteItem(cartItemId);
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
       <CartsItem
        key={item._id}
        item={item}
        onDeleteItem={this.handleDelete.bind(this)}/>
      ))}
     </tbody>
    </table>
    <div className="row">
     <div className="col-md-6">
      <p>Total Items: {cartItems.length}</p>
      <p>Total Price: {totalPrice(cartItems)}</p>
     </div>
     <div className="col-md-6">
      <a href={"/carts/checkout/" + Meteor._localStorage.getItem('userId')
} className="btn btn-primary pull-right btn-large">CHECK OUT</a>
     </div>
    </div>
   </div>
  );
 }
}


export default CartsList;
