import React from 'react';
import CategoriesNavListRow from './categories_nav_list_row.jsx';

class CategoriesNavList extends React.Component{

 handleFilterCategory(filter){
  this.props.onFilterCategory(filter);
 }


 render(){

  const{categories} = this.props;

  return (
   <ul className="list-group">
    <li className="list-group-item"><h4>Categories</h4></li>
    {categories.map( category => (
     <CategoriesNavListRow key={category._id} onFilterCategory={this.handleFilterCategory.bind(this)} category={category} />
    ))}
   </ul>
  )
 }
}


export default CategoriesNavList;
