import selectedProductReducer from '../../reducers/selected-product-reducer';

describe('selectedProductReducer', () => {
  test('should return defaul state given null action type', () => {
    expect(selectedProductReducer(undefined, {type: null})).toEqual(null);
  })
})