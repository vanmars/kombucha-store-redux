import React from 'react';
import { v4 } from 'uuid'; 
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewProductForm(props) {

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      flavor: event.target.flavor.value, 
      price: parseFloat(event.target.price.value).toFixed(2), 
      quantity: event.target.quantity.value, 
      id: v4()});
  }

  return (
    <React.Fragment>
      <div className="card bodyFont p-4 w-50 mx-auto" style={{backgroundColor:  "#8FB8DE"}}>
        <h1 className="headingFont" style={{color: "grey"}}>Add a New Product!</h1>
        <hr />
        <ReusableForm
          formSubmissionHandler={handleNewProductFormSubmission}
          buttonText="Create!"
        />
      </div>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
}

export default NewProductForm;