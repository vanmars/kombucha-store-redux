import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  // CSS OBJECTS
  const span = {
    fontSize: 16,
    color: "#BCB6FF"
  };
  const para = {
    fontSize: 14, 
    color: "grey"
  };

  // CONDITIONAL RENDERING
  let sellButton;
  let restockButton;
  let sellQuantity;
  let alert = <p style={{color:"#426B69", fontSize: 16}}>In Stock</p>;

  if (parseInt(props.quantity) !== 0){
    sellQuantity = parseInt(props.quantity) - 1;
    if (sellQuantity < 10){
      alert = <p style={{color:"#E2EB98 ", fontSize: 16}}>Almost Empty</p>;
    };
    sellButton = <button className="btn sellBtn w-50" onClick={() => props.whenSellClicked({
      name: props.name, 
      brand: props.brand, 
      price: props.price, 
      flavor: props.flavor, 
      quantity: sellQuantity.toString(), 
      id: props.id
    })}>Sell</button>;
  } else {
    alert = <p style={{color:"red", fontSize: 16}}>Out of Stock</p>;
    restockButton = <button className="btn restockBtn w-50" onClick={() => props.whenRestockClicked({
      name: props.name, 
      brand: props.brand, 
      price: props.price, 
      flavor: props.flavor, 
      quantity: "124", 
      id: props.id
    })}>Restock</button>;
  };

  return (
    <React.Fragment>
      <div onClick={()=>props.whenProductClicked(props.id)} className="productCard">
        <div className="headingFont card-header text-center text-white" style={{fontSize: 24, color: "#C16E70"}}>
          {props.name}
          {alert}
        </div>
        <div className="card-body bg-white bodyFont">
          <p className="bodyFont" style={para}><span className="headingFont" style={span}>Brand:</span> {props.brand}</p>
          <p className="bodyFont" style={para}><span className="headingFont" style={span}>Flavor:</span> {props.flavor}</p>
          <p className="bodyFont" style={para}><span className="headingFont" style={span}>Price:</span> ${props.price}</p>
          <p className="bodyFont" style={para}><span className="headingFont" style={span}>Available Pint(s):</span> {props.quantity}</p>
        </div>
      </div>
      <div className="card-footer text-center">
        {sellButton}
        {restockButton}
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  quantity: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func,
  whenSellClicked: PropTypes.func,
  whenRestockCicked: PropTypes.func
}

export default Product;