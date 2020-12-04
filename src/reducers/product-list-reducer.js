import * as c from '../actions/ActionTypes';

export default (state={}, action) => {
  const { name, brand, price, flavor, quantity, id} = action;
  switch(action.type) {
    case c.ADD_PRODUCT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          quantity: quantity,
          id: id
        }
      });
    case c.DELETE_PRODUCT:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  };
}