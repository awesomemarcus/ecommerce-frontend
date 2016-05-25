import React from 'react';

const CartsItem = ({item}) => (
 <tr>
   <td>{item.title}</td>
   <td>{item.price}</td>
   <td>{item.quantity}</td>
 </tr>
);

export default CartsItem;
