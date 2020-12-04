export default (state={}, action) => {
  const { name, brand, price, flavor, quantity, id} = action;
  switch(action.type) {
    case 'ADD_PRODUCT':
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
    case 'DELETE_PRODUCT':
      return
    default:
      return state;
  };
}