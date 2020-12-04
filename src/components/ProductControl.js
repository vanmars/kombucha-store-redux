import React, { Component } from 'react';
import { v4 } from 'uuid'; 
import ProductList from './ProductList';
import NewProductForm from './NewProductForm'
import UpdateProductForm from './UpdateProductForm'
import ProductDetail from './ProductDetail'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProductControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      // masterProductList: [
      //   {name: "Gingerberry Goddess", brand: "Vanessa's Kombuchary", price: 3.25, flavor: "Gingerberry", quantity: 1, id: v4()},
      //   {name: "Mystic Mango", brand: "Booch Boulevard, LLC", price: 3.99, flavor: "Mango", quantity: 10, id: v4()},
      //   {name: "Symphonic Straberry", brand: "Scarlett's Secret SCOBY", price: 4.99, flavor: "Strawberry", quantity: 50, id: v4()},
      //   {name: "Regal Raspberry", brand: "Paradise Kombucha Co.", price: 2.99, flavor: "Raspberry", quantity: 124, id: v4()}
      // ],
      // formVisible: false,
      selectedProduct: null,
      editing: false
    };
  }

  //CUSTOM METHODS
  // Handle Reusable Button Clicks
  handleClick = () => {
    if (this.state.selectedProduct != null){
      this.setState({
        // formVisible: false,
        selectedProduct: null,
        editing: false
      })
    } else {
      const{ dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      };
      dispatch(action)
      // this.setState(prevState => ({
      //   formVisible: !prevState.formVisible
      // }));
    }
  }

  // Create New Product
  handleCreatingProduct = (newProduct) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, quantity, id} = newProduct;
    const action  = {
      type: 'ADD_PRODUCT',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    };
    dispatch(action2);
    // this.setState({
       // masterProductList: newMasterProductList, 
       // formVisible: false
    // });
  }

  // Read Individual Product Details
  handleSelectingProduct = (id) => {
    const selectedProduct = this.props.masterProductList[id];
    this.setState({selectedProduct: selectedProduct});
  }

  // Update Product
  handleUpdateClick = () => {
    this.setState({editing: true});
  }

  handleUpdatingProduct = (productToUpdate) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, quantity, id} = productToUpdate;
    const action  = {
      type: 'ADD_PRODUCT',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };
    dispatch(action);
    // const updatedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(productToUpdate);
    this.setState({
      // masterProductList: updatedMasterProductList, 
      editing: false, 
      selectedProduct: null
    });
  }

  // Sell Product
  handleSellingProduct = (productToSell) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, quantity, id} = productToSell;
    const action  = {
      type: 'ADD_PRODUCT',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };
    dispatch(action);
    // const updatedMasterProductList = this.state.masterProductList.filter(product => product.id !== productToSell.id).concat(productToSell);
    this.setState({
      // masterProductList: updatedMasterProductList,
      selectedProduct: null
    })
  }

  // Restock Product
  handleRestockingProduct = (productToRestock) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, quantity, id} = productToRestock;
    const action  = {
      type: 'ADD_PRODUCT',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };
    dispatch(action);
    // const updatedMasterProductList = this.state.masterProductList.filter(product => product.id !== productToRestock.id).concat(productToRestock);
    this.setState({
      // masterProductList: updatedMasterProductList,
      selectedProduct: null
    })
  }

  // Delete Individual Product
  handleDeletingProduct = (id) => {
    const { dispatch } = this.props;
    const action  = {
      type: 'DELETE_PRODUCT',
      id: id
    };
    dispatch(action);
    // const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
    this.setState({
      // masterProductList: newMasterProductList, 
      selectedProduct: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    // CONDITIONAL RENDERING
    // Updating a Product
    if (this.state.editing) {
      currentlyVisibleState = 
        <UpdateProductForm
          product={this.state.selectedProduct}
          onProductUpdate={this.handleUpdatingProduct}
        />
      buttonText = "Return to Product List";
    
    // Product Detail
    } else if (this.state.selectedProduct){
      currentlyVisibleState = 
        <ProductDetail
          product={this.state.selectedProduct}
          onClickingDelete={this.handleDeletingProduct}
          onClickingUpdate={this.handleUpdateClick}
        />
      buttonText = "Return to Product List";

    // New Product Form
    } else if (this.props.formVisible){
      currentlyVisibleState = 
        <NewProductForm
          onNewProductCreation={this.handleCreatingProduct}
        />
      buttonText = "Return to Product List";

    // Product List
    } else {
      currentlyVisibleState = 
      <ProductList
        products={this.props.masterProductList}
        onProductSelection={this.handleSelectingProduct}
        onClickingSell={this.handleSellingProduct}
        onClickingRestock={this.handleRestockingProduct}
        />
      buttonText = "Add a New Product";
    }

    return (
      <React.Fragment>
        <br />
        {currentlyVisibleState}
        <hr />
        <button className="btn shadow addProductBtn text-white" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterProductList: state.masterProductList,
    formVisible: state.formVisible
  };
}

ProductControl.propTypes = {
  masterProductList: PropTypes.object,
  formVisible: PropTypes.bool
}

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;