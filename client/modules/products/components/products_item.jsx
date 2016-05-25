import React from 'react';
import CartsButton from '../../carts/containers/carts_button.js';

class ProductsItem extends React.Component{

 render(){

  const {product} = this.props;

  return (
   <div className="col-md-4">
    <div className="panel panel-default">
     <div className="panel-heading">
      <h4>{product.title}</h4>
     </div>
     <div className="panel-body">
      <p>{product.description}</p>
      <p>Price: P {product.price}</p>
      <p>Items Left: {product.quantity}</p>
     </div>
     <div className="panel-footer">
      <CartsButton product={product}/>
     </div>
    </div>
   </div>
  );
 }
}

export default ProductsItem;
