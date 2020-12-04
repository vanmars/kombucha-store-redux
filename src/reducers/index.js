import { combineReducers } from 'redux';
import productListReducer from './product-list-reducer';
import formVisibleReducer from './form-visible-reducer';

const rootReducer = combineReducers({
  masterProductList: productListReducer,
  formVisible: formVisibleReducer
});

export default rootReducer;
