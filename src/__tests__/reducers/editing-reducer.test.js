import editingReducer from '../../reducers/editing-reducer';
import * as c from '../../actions/ActionTypes';

describe('editingReducer', () => {
  test('should return default state with null action type', () => {
    expect(editingReducer(undefined, {type: null})).toEqual(false);
  });

  test('should toggle editing state to return true', () => {
    expect(editingReducer(false, {type: c.TOGGLE_EDITING})).toEqual(true)
  });
})