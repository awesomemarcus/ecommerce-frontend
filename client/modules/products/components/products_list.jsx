import React from 'react';
import ProductsItem from '../containers/products_item.js';

const ProductsList = ({products}) => (
  <div className="row">
   {products.map( product => (
    <ProductsItem key={product._id} product={product} />
   ))}
  </div>
);

export default ProductsList;
