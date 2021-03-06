import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import productListReducer from '../../reducers/product-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import selectedProductReducer from '../../reducers/selected-product-reducer';
import editingReducer from '../../reducers/editing-reducer';
import * as c from '../../actions/ActionTypes';

describe('rootReducer', () => {
  let store = createStore(rootReducer);

  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      masterProductList: {
        1: {name: "Gingerberry Goddess", brand: "Vanessa's Kombuchary", price: "3.25", flavor: "Gingerberry", quantity: "1", id: "1"},
        2: {name: "Mystic Mango", brand: "Booch Boulevard, LLC", price: "3.99", flavor: "Mango", quantity: "10", id: "2"},
        3: {name: "Symphonic Straberry", brand: "Scarlett's Secret SCOBY", price: "4.99", flavor: "Strawberry", quantity: "50", id: "3"},
        4: {name: "Regal Raspberry", brand: "Paradise Kombucha Co.", price: "2.99", flavor: "Raspberry", quantity: "124", id: "4"}
      },
      formVisible: false,
      selectedProduct: null,
      editing: false
    });
  });

  test('Check that inital state of productListReducer matches root reducer', () => {
    expect(store.getState().masterProductList).toEqual(productListReducer(undefined, {type: null}));
  });

  test('Check that inital state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, {type: null}));
  });

  test('Check that inital state of selectedProductReducer matches root reducer', () => {
    expect(store.getState().selectedProduct).toEqual(selectedProductReducer(undefined, {type: null}));
  });

  test('Check that inital state of editingReducer matches root reducer', () => {
    expect(store.getState().editing).toEqual(editingReducer(undefined, {type: null}));
  });

  test('Check that add product works for productListReducer and root reducer', () => {
    const action = {
      type: c.ADD_PRODUCT,
      name: "Gratuitous Grape", 
      brand: "The Kombucha Bar", 
      price: 3.00, 
      flavor: "Grape", 
      quantity: 50, 
      id: 1
      };
    store.dispatch(action);
    expect(store.getState().masterProductList).toEqual(productListReducer(undefined, action));
  });

  test('Check that toggle form works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
      };
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that select product works for selectedProductReducer and root reducer', () => {
    const action = {
      type: c.SELECT_PRODUCT,
      name: "Gratuitous Grape", 
      brand: "The Kombucha Bar", 
      price: 3.00, 
      flavor: "Grape", 
      quantity: 50, 
      id: 1
      };
    store.dispatch(action);
    expect(store.getState().selectedProduct).toEqual(selectedProductReducer(undefined, action));
  });

  test('Check that toggle works for editingReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_EDITING,
      };
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(undefined, action));
  });

})