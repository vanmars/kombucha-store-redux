import * as c from '../actions/ActionTypes';

const defaultState = {
  "1": {name: "Gingerberry Goddess", brand: "Vanessa's Kombuchary", price: "3.25", flavor: "Gingerberry", quantity: "1", id: "1"},
  "2": {name: "Mystic Mango", brand: "Booch Boulevard, LLC", price: "3.99", flavor: "Mango", quantity: "10", id: "2"},
  "3": {name: "Symphonic Straberry", brand: "Scarlett's Secret SCOBY", price: "4.99", flavor: "Strawberry", quantity: "50", id: "3"},
  "4": {name: "Regal Raspberry", brand: "Paradise Kombucha Co.", price: "2.99", flavor: "Raspberry", quantity: "124", id: "4"}
}

export default (state=defaultState, action) => {
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