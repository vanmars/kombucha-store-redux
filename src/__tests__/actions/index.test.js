import * as a from '../../actions/index';
import * as c from '../../actions/ActionTypes';

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
      type: c.ADD_PRODUCT,
      name: "Gratuitous Grape", 
      brand: "The Kombucha Bar", 
      price: 3.00, 
      flavor: "Grape", 
      quantity: 50, 
      id: 1
    });
  });

  test('deleteProduct should create delete product action', () => {
    expect(a.deleteProduct(1)).toEqual({
      type: c.DELETE_PRODUCT,
      id: 1
    });
  });

  test('toggleForm should create toggle form action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  test('selectProduct should create select product action', () => {
    expect(a.selectProduct({
      name: "Gratuitous Grape", 
      brand: "The Kombucha Bar", 
      price: 3.00, 
      flavor: "Grape", 
      quantity: 50, 
      id: 1
    })).toEqual({
      type: c.SELECT_PRODUCT,
      name: "Gratuitous Grape", 
      brand: "The Kombucha Bar", 
      price: 3.00, 
      flavor: "Grape", 
      quantity: 50, 
      id: 1
    });
  });

  test('resetProduct should create reset product action', () => {
    expect(a.resetProduct()).toEqual({
      type: c.RESET_PRODUCT
    });
  });

  test('toggleEditing should create toggle editing action', () => {
    expect(a.toggleEditing()).toEqual({
      type: c.TOGGLE_EDITING
    });
  });

})