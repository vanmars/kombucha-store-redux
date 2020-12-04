import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

function ProductList(props) {
  const { products, onProductSelection, onClickingSell, onClickingRestock } = props;

  return (
    <React.Fragment>
      <h1 className="headingFont" style={{color: "#BCB6FF"}}>Master Keg List</h1>
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
        {Object.values(products).map((product) => 
          <div className="col mb-4">
            <div className= "card shadow-lg h-100 text-left" style={{backgroundColor: "#DC9E82" }}>
              <Product
                name={product.name}
                brand={product.brand}
                price={product.price}
                flavor={product.flavor}
                quantity={product.quantity}
                key={product.id}
                id={product.id}
                whenProductClicked={onProductSelection}
                whenSellClicked={onClickingSell}
                whenRestockClicked={onClickingRestock}
              />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

ProductList.propTypes = {
  products: PropTypes.object,
  onProductSelection: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default ProductList;