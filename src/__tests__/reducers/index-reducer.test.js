import rootReducer from '../../reducers/index';

describe('rootReducer', () => {
  test('should return defaul state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
    masterProductList: {},
    formVisible: false
    });
  });
})