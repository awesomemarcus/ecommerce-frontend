import React from 'react';
import ProductsItem from '../containers/products_item.js';
import CategoriesNavList from '../../categories/containers/categories_nav_list.js';

class ProductsList extends React.Component{

 handleFilterCategory(filter){
  const {filterText} = this.props;

  const queryFilter = {product_cat: filter};

  filterText(queryFilter);
 }

 handleFilterSearch(){
  const {filterText} = this.props;

  const {search} = this.refs;

  const queryFilter = {'$or':[{title: {$regex: search.value, $options: 'i'}}, {product_cat: {$regex: search.value, $options: 'i'}}, {description: {$regex: search.value, $options: 'i'}}]};

  filterText(queryFilter);

 }

 render(){

  const {products} = this.props;

  return (
   <div className="row" id="products-list">
    <div className="col-md-3">
     <div className="sidebar-nav">
      <div className="panel">
       <div className="panel-body">
        <CategoriesNavList onFilterCategory={this.handleFilterCategory.bind(this)}/>
       </div>
      </div>
     </div>
    </div>
    <div className="col-md-9">
     <div className="row search-box">
      <div className="col-md-12">
       <div className="form-group">
        <div className="input-group">
          <input type="text" ref="search" className="form-control" placeholder="Search" onChange={this.handleFilterSearch.bind(this)}/>
           <span className=" input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
        </div>
       </div>
      </div>
     </div>
     <div className="row">
      {products.map( product => (
       <ProductsItem key={product._id} product={product} />
      ))}
     </div>
    </div>
   </div>
  );
 }

}


export default ProductsList;
