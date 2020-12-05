import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  let form;
  
  if (props.product){
    form = 
    <form onSubmit={props.formSubmissionHandler} className="text-left">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" defaultValue={props.product.name} className="form-control w-75" required />
    </div>
    <div className="form-group">
      <label htmlFor="brand">Brand</label>
      <input name="brand" id="brand" defaultValue={props.product.brand} className="form-control w-75" required />
    </div>
    <div className="form-group">
      <label htmlFor="flavor">Flavor</label>
      <input name="flavor" id="flavor" defaultValue={props.product.flavor} className="form-control w-75" required />
    </div>
    <div className="form-group">
      <label htmlFor="price">Price</label>
      <input name="price" id="price" defaultValue={props.product.price} className="form-control w-75" required />
    </div>
    <div className="form-group">
      <label htmlFor="quantity">Quantity</label>
      <input type="text" name="quantity" id="quantity" defaultValue={props.product.quantity} className="form-control w-75" required />
    </div>
    <button type="submit" className="btn btn-shadow text-white formBtn">{props.buttonText}</button>
  </form>
  } else {
    form = 
    <form onSubmit={props.formSubmissionHandler} className="text-left">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Drink Name" className="form-control w-75" required />
    </div>
    <div className="form-group">
      <label htmlFor="brand">Brand</label>
      <input name="brand" id="brand" placeholder="Kombucha Co." className="form-control w-75" required />
    </div>
    <div className="form-group">
      <label htmlFor="flavor">Flavor</label>
      <input name="flavor" id="flavor" placeholder="Grape" className="form-control w-75" required />
    </div>
    <div className="form-group">
      <label htmlFor="price">Price</label>
      <input name="price" id="price" placeholder="$5.00" className="form-control w-75" required />
    </div>
    <div className="form-group">
      <label htmlFor="quantity">Quantity</label>
      <input type="text" name="quantity" id="quantity" placeholder="50" className="form-control w-75" required />
    </div>
    <button type="submit" className="btn btn-shadow text-white formBtn">{props.buttonText}</button>
  </form>
  }

  return (
    <React.Fragment>
     {form}
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func,
  product: PropTypes.object
}

export default ReusableForm;