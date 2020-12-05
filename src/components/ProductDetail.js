import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props) {
  const { product, onClickingDelete, onClickingUpdate } = props;

  return (
    <React.Fragment>
      <div className="card shadow-lg w-75 mx-auto" style={{backgroundColor: "#BCB6FF"}}>
        <div className="headingFont card-header text-center text-white" style={{fontSize: 24, color: "#C16E70"}}>{product.name}</div>
        <div className="card-body">
          <p>Brand: {product.brand}</p>
          <p>Flavor: {product.flavor}</p>
          <p>Price: ${product.price}</p>
          <p>Available Pint(s): {product.quantity}</p>
        </div>
        <div className="card-footer justify-content-center">
          <button onClick={onClickingUpdate} className="btn shadow mr-2 updateBtn">Update</button>
          <button onClick={() => onClickingDelete(product.id)} className="btn shadow deleteBtn">Delete</button>
        </div>
        </div>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingUpdate: PropTypes.func
}

export default ProductDetail;