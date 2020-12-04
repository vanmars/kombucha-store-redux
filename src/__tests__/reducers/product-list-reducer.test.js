import productListReducer from  '../../reducers/product-list-reducer';

describe ('productListReducer', () => {
  test('it should return the default state given a null action type', () => {
    expect(productListReducer([], {type:null})).toEqual([])
  })
})