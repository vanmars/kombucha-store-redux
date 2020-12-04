import { combineReducers } from 'redux';
import productListReducer from './product-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedProductReducer from './selected-product-reducer';

const rootReducer = combineReducers({
  masterProductList: productListReducer,
  formVisible: formVisibleReducer,
  selectedProduct: selectedProductReducer
});

export default rootReducer;
