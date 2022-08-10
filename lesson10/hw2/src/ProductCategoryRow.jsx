import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
