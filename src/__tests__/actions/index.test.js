import * as a from '../../actions';

describe('product actions', () =>{
  test('addProduct should create add product action', () => {
    expect(a.addProduct({
      name: "Gratuitous Grape", 
      brand: "The Kombucha Bar", 
      price: 3.00, 
      flavor: "Grape", 
      quantity: 50, 
      id: 1
    })).toEqual({
      type: 'ADD_PRODUCT',
      name: "Gratuitous Grape", 
      brand: "The Kombucha Bar", 
      price: 3.00, 
      flavor: "Grape", 
      quantity: 50, 
      id: 1
    });
  });
})