import React, { Component } from 'react';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm'
import UpdateProductForm from './UpdateProductForm'
import ProductDetail from './ProductDetail'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../actions';

class ProductControl extends Component {
  // constructor(props){
  //   super(props);
  // };

  //CUSTOM METHODS
  // Handle Reusable Button Clicks
  handleClick = () => {
    const{ dispatch } = this.props;
    if (this.props.selectedProduct != null){
      const action = a.resetProduct();
      // {
      //   type: 'RESET_PRODUCT'
      // };
      dispatch(action);
      const action2 = a.toggleEditing();
      // {
      //   type: 'TOGGLE_EDITING'
      // };
      dispatch(action2);
      const action3 = a.toggleForm();
      // {
      //   type: 'TOGGLE_FORM'
      // };
      dispatch(action3);
    //   // this.setState({
    //     // formVisible: false,
    //     // selectedProduct: null,
    //     // editing: false
    //   // })
    } else {
      const action = a.toggleForm();
      // {
      //   type: 'TOGGLE_FORM'
      // };
      dispatch(action)
      // this.setState(prevState => ({
      //   formVisible: !prevState.formVisible
      // }));
    }
  }

  // Create New Product
  handleCreatingProduct = (newProduct) => {
    const { dispatch } = this.props;
    // const { name, brand, price, flavor, quantity, id} = newProduct;
    const action = a.addProduct(newProduct); 
    // {
    //   type: 'ADD_PRODUCT',
    //   name: name,
    //   brand: brand,
    //   price: price,
    //   flavor: flavor,
    //   quantity: quantity,
    //   id: id
    // };
    dispatch(action);
    const action2 = a.toggleForm();
    // {
    //   type: 'TOGGLE_FORM'
    // };
    dispatch(action2);
  }

  // Read Individual Product Details
  handleSelectingProduct = (id) => {
    const selectedProduct = this.props.masterProductList[id];
    // const { name, brand, price, flavor, quantity } = selectedProduct;
    const { dispatch } = this.props;
    const action = a.selectProduct(selectedProduct)
    // {
    //   type: 'SELECT_PRODUCT',
    //   name: name,
    //   brand: brand,
    //   price: price,
    //   flavor: flavor,
    //   quantity: quantity,
    //   id: id
    // }
    dispatch(action);
  }

  // Update Product
  handleUpdateClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditing();
    // {
    //   type: 'TOGGLE_EDITING'
    // };
    dispatch(action);
  }

  handleUpdatingProduct = (productToUpdate) => {
    const { dispatch } = this.props;
    // const { name, brand, price, flavor, quantity, id} = productToUpdate;
    const action  = a.addProduct(productToUpdate);
    // {
    //   type: 'ADD_PRODUCT',
    //   name: name,
    //   brand: brand,
    //   price: price,
    //   flavor: flavor,
    //   quantity: quantity,
    //   id: id
    // };
    dispatch(action);
    const action2 = a.resetProduct();
    // {
    //   type: 'RESET_PRODUCT'
    // };
    dispatch(action2);
    const action3 = a.toggleEditing();
    // {
    //   type: 'TOGGLE_EDITING'
    // };
    dispatch(action3);
    // this.setState({
      // masterProductList: updatedMasterProductList, 
      // editing: false, 
      // selectedProduct: null
    // });
  }

  // Sell Product
  handleSellingProduct = (productToSell) => {
    const { dispatch } = this.props;
    // const { name, brand, price, flavor, quantity, id} = productToSell;
    const action  = a.addProduct(productToSell)
    // {
    //   type: 'ADD_PRODUCT',
    //   name: name,
    //   brand: brand,
    //   price: price,
    //   flavor: flavor,
    //   quantity: quantity,
    //   id: id
    // };
    dispatch(action);
    const action2 = a.resetProduct();
    // {
    //   type: 'RESET_PRODUCT'
    // };
    dispatch(action2);
    // this.setState({
      // masterProductList: updatedMasterProductList,
      // selectedProduct: null
    // })
  }

  // Restock Product
  handleRestockingProduct = (productToRestock) => {
    const { dispatch } = this.props;
    // const { name, brand, price, flavor, quantity, id} = productToRestock;
    const action  = a.addProduct(productToRestock);
    // {
    //   type: 'ADD_PRODUCT',
    //   name: name,
    //   brand: brand,
    //   price: price,
    //   flavor: flavor,
    //   quantity: quantity,
    //   id: id
    // };
    dispatch(action);
    const action2 = a.resetProduct();
    // {
    //   type: 'RESET_PRODUCT'
    // };
    dispatch(action2);
    // this.setState({
      // masterProductList: updatedMasterProductList,
      // selectedProduct: null
    // })
  }

  // Delete Individual Product
  handleDeletingProduct = (id) => {
    const { dispatch } = this.props;
    const action  = a.deleteProduct(id);
    // {
    //   type: 'DELETE_PRODUCT',
    //   id: id
    // };
    dispatch(action);
    const action2 = a.resetProduct();
    // {
    //   type: 'RESET_PRODUCT'
    // };
    dispatch(action2);
    // this.setState({
      // masterProductList: newMasterProductList, 
      // selectedProduct: null
    // });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    // CONDITIONAL RENDERING
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