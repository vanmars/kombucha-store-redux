import editingReducer from '../../reducers/editing-reducer';

describe('editingReducer', () => {
  test('should return default state with null action type', () => {
    expect(editingReducer(undefined, {type: null})).toEqual(false);
  });
})