import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import productListReducer from '../../reducers/product-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('rootReducer', () => {
  let store = createStore(rootReducer);

  test('should return defaul state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
    masterProductList: {},
    formVisible: false
    });
  });

  test('Check that inital state of productListReducer matches root reducer', () => {
    expect(store.getState().masterProductList).toEqual(productListReducer(undefined, {type: null}));
  });

  test('Check that inital state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, {type: null}));
  });

})