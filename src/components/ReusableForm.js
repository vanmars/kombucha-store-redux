import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} className="text-left">
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Kombucha Drink" className="form-control w-75" required />
        </div>
        <div className="form-group">
          <label for="brand">Brand</label>
          <input name="brand" id="brand" placeholder="Kombucha Co." className="form-control w-75" required />
        </div>
        <div className="form-group">
          <label for="flavor">Flavor</label>
          <input name="flavor" id="flavor" placeholder="Grape" className="form-control w-75" required />
        </div>
        <div className="form-group">
          <label for="price">Price</label>
          <input name="price" id="price" placeholder="$5.00" className="form-control w-75" required />
        </div>
        <div className="form-group">
          <label for="quantity">Quantity</label>
          <input type="text" name="quantity" id="quantity" placeholder="50" className="form-control w-75" required />
        </div>
        <button type="submit" className="btn btn-shadow text-white formBtn">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func
}

export default ReusableForm;