import selectedProductReducer from '../../reducers/selected-product-reducer';
import * as c from '../../actions/ActionTypes';

describe('selectedProductReducer', () => {
  const masterProductList = {
    1: {
      name: "Gingerberry Goddess", 
      brand: "Vanessa's Kombuchary", 
      price: 3.25, flavor: "Gingerberry", 
      quantity: 1, 
      id: 1
    },
    2: {
      name: "Mystic Mango", 
      brand: "Booch Boulevard, LLC", 
      price: 3.99, 
      flavor: "Mango", 
      quantity: 10, 
      id: 2
    }
  };

  let action;

  test('should return default state given null action type', () => {
    expect(selectedProductReducer(undefined, {type: null})).toEqual(null);
  });

  test('should successfully store selectedProduct', () => {
    action = {
      type: c.SELECT_PRODUCT,
      name: "Gingerberry Goddess", 
      brand: "Vanessa's Kombuchary", 
      price: 3.25, flavor: "Gingerberry", 
      quantity: 1, 
      id: 1
    };

    expect(selectedProductReducer({masterProductList: masterProductList}, action)).toEqual({
      name: "Gingerberry Goddess", 
      brand: "Vanessa's Kombuchary", 
      price: 3.25, flavor: "Gingerberry", 
      quantity: 1, 
      id: 1
    });
  });

  test('should successfully reset selectedProduct', () => {
    action = {
      type: c.RESET_PRODUCT
    }
    expect(selectedProductReducer(masterProductList[1], action)).toEqual(null);
  });

})