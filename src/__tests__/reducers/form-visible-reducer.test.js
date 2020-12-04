import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {
  test('should return default state with null action type', () => {
    expect(formVisibleReducer(undefined, {type: null})).toEqual(false);
  });
})