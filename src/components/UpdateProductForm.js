import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function UpdateProductForm(props) {
  const {product, onProductUpdate} = props;

  function handleUpdateProductFormSubmission(event){
    event.preventDefault();
    onProductUpdate({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      flavor: event.target.flavor.value, 
      price: parseFloat(event.target.price.value).toFixed(2), 
      quantity: event.target.quantity.value, 
      id: product.id});
  }

  return (
    <React.Fragment>
      <div className="card bodyFont p-4 w-50 mx-auto" style={{backgroundColor:  "#8FB8DE"}}>
        <h1 className="headingFont" style={{color: "grey"}}>Update {product.name}!</h1>
        <hr />
        <ReusableForm 
          buttonText="Update!"
          formSubmissionHandler={handleUpdateProductFormSubmission}
          product={product}
        />
      </div>
    </React.Fragment>
  );
}

UpdateProductForm.propTypes = {
  product: PropTypes.object,
  onProductUpdate: PropTypes.func
 }

export default UpdateProductForm;