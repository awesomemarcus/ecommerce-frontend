import React from 'react';

class CartsItem extends React.Component{

 handleDelete(e){
  e.preventDefault();

  const {item} = this.props;

  this.props.onDeleteItem(item._id);

 }

 render(){

  const {item} = this.props

  return(
   <tr>
     <td>{item.title}</td>
     <td>{item.price}</td>
     <td>{item.quantity}</td>
     <td><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Cancel</button></td>
   </tr>
  )
 }
}

export default CartsItem;
