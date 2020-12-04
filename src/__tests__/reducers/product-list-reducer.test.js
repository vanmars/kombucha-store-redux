import { findAllByPlaceholderText } from '@testing-library/react';
import { v4 } from 'uuid'
import productListReducer from  '../../reducers/product-list-reducer';

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
      type: 'ADD_PRODUCT',
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
})