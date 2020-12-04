import * as c from '../actions/ActionTypes';

export default (state=null, action) => {
  const { type, name, brand, price, flavor, quantity, id} = action
  switch(type) {
    case c.SELECT_PRODUCT:
      return {
        name: name, 
        brand: brand, 
        price: price, 
        flavor: flavor,
        quantity: quantity, 
        id: id
      }
    case c.RESET_PRODUCT:
      return null;
    default:
      return state;
  };
}