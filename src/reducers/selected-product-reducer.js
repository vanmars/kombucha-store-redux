export default (state=null, action) => {
  const { type, name, brand, price, flavor, quantity, id} = action
  switch(type) {
    case 'SELECT_PRODUCT':
      return {
        name: name, 
        brand: brand, 
        price: price, 
        flavor: flavor,
        quantity: quantity, 
        id: id
      }
    case 'RESET_PRODUCT':
      return null;
    default:
      return state;
  };
}