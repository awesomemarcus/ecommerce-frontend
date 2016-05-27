import React from 'react';

class CategoriesNavListRow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterCategory(){
   this.props.onFilterCategory(this.refs.category.innerText);
  }

  render() {
   const {category} = this.props;
    return (
      <a href="" onClick={this.handleFilterCategory.bind(this)}><li ref="category" key={category._id} className="list-group-item"  data-cat={category.title}>{category.title}</li></a>
    );
  }
}

export default CategoriesNavListRow;
