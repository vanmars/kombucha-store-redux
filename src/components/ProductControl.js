import React, { Component } from 'react';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm'
import UpdateProductForm from './UpdateProductForm'
import ProductDetail from './ProductDetail'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../actions';

class ProductControl extends Component {
  handleClick = () => {
    const{ dispatch } = this.props;
    if (this.props.selectedProduct != null){
      const action = a.resetProduct();
      dispatch(action);
      if (this.props.editing === true) {
        const action2 = a.toggleEditing();
        dispatch(action2);
      }
    } else {
      const action = a.toggleForm();
      dispatch(action);
    };
  }

  handleCreatingProduct = (newProduct) => {
    const { dispatch } = this.props;
    const action = a.addProduct(newProduct); 
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleSelectingProduct = (id) => {
    const { dispatch } = this.props;
    const selectedProduct = this.props.masterProductList[id];
    const action = a.selectProduct(selectedProduct);
    dispatch(action);
  }

  handleUpdateClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditing();
    dispatch(action);
  }

  handleUpdatingProduct = (productToUpdate) => {
    const { dispatch } = this.props;
    const action  = a.addProduct(productToUpdate);
    dispatch(action);
    const action2 = a.resetProduct();
    dispatch(action2);
    const action3 = a.toggleEditing();
    dispatch(action3);
  }

  handleSellingProduct = (productToSell) => {
    const { dispatch } = this.props;
    const action  = a.addProduct(productToSell);
    dispatch(action);
    const action2 = a.resetProduct();
    dispatch(action2);
  }

  handleRestockingProduct = (productToRestock) => {
    const { dispatch } = this.props;
    const action  = a.addProduct(productToRestock);
    dispatch(action);
    const action2 = a.resetProduct();
    dispatch(action2);
  }

  handleDeletingProduct = (id) => {
    const { dispatch } = this.props;
    const action  = a.deleteProduct(id);
    dispatch(action);
    const action2 = a.resetProduct();
    dispatch(action2);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    // Updating a Product
    if (this.props.editing) {
      currentlyVisibleState = 
        <UpdateProductForm
          product={this.props.selectedProduct}
          onProductUpdate={this.handleUpdatingProduct}
        />
      buttonText = "Return to Product List";
    
    // Product Detail
    } else if (this.props.selectedProduct){
      currentlyVisibleState = 
        <ProductDetail
          product={this.props.selectedProduct}
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
    };

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
    formVisible: state.formVisible,
    selectedProduct: state.selectedProduct,
    editing: state.editing
  };
}

ProductControl.propTypes = {
  masterProductList: PropTypes.object,
  formVisible: PropTypes.bool,
  selectedProduct: PropTypes.object,
  editing: PropTypes.bool
}

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;