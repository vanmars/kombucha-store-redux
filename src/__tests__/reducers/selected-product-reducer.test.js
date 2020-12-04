import selectedProductReducer from '../../reducers/selected-product-reducer';

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

  const action = {
    type: 'SELECT_PRODUCT',
    id: 1
  }

  test('should return default state given null action type', () => {
    expect(selectedProductReducer(undefined, {type: null})).toEqual(null);
  });

  test('should successfully store selectedProduct', () => {
    expect(selectedProductReducer({masterProductList: masterProductList}, action)).toEqual({
      1: {
        name: "Gingerberry Goddess", 
        brand: "Vanessa's Kombuchary", 
        price: 3.25, flavor: "Gingerberry", 
        quantity: 1, 
        id: 1
      }
    });
  });
})