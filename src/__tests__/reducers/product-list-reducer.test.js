import productListReducer from  '../../reducers/product-list-reducer';
import * as c from '../../actions/ActionTypes';

describe ('productListReducer', () => {
  test('it should return the default state given a null action type', () => {
    expect(productListReducer({}, {type:null})).toEqual({});
  });

  test('should successfully add new product to masterProductList', () => {
    const productData = {
      name: "Gratuitous Grape", 
      brand: "The Kombucha Bar", 
      price: 3.00, 
      flavor: "Grape", 
      quantity: 50, 
      id: 1
    };
    const { name, brand, price, flavor, quantity, id} = productData;
    const action = {
      type: c.ADD_PRODUCT,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };
    expect(productListReducer({}, action)).toEqual({
      [id]: {
        name: "Gratuitous Grape", 
        brand: "The Kombucha Bar", 
        price: 3.00, 
        flavor: "Grape", 
        quantity: 50, 
        id: 1
      }
    });
  });

  test('should successfully delete a product', () => {
    const currentState = {
      1: {name: "Gingerberry Goddess", 
      brand: "Vanessa's Kombuchary", 
      price: 3.25, flavor: "Gingerberry", 
      quantity: 1, 
      id: 1},
      2: {name: "Mystic Mango", 
      brand: "Booch Boulevard, LLC", 
      price: 3.99, 
      flavor: "Mango", 
      quantity: 10, 
      id: 2},
    };
    const action = {
      type: c.DELETE_PRODUCT,
      name: "Gingerberry Goddess", 
      brand: "Vanessa's Kombuchary", 
      price: 3.25, flavor: "Gingerberry", 
      quantity: 1, 
      id: 1
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {name: "Mystic Mango", 
      brand: "Booch Boulevard, LLC", 
      price: 3.99, 
      flavor: "Mango", 
      quantity: 10, 
      id: 2},
    });
  });
})