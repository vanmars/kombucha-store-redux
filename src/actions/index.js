import * as c from './ActionTypes';

// ADD_PRODUCT
export const addProduct = (product) => {
  const { name, brand, price, flavor, quantity, id} = product;
  return {
    type: c.ADD_PRODUCT,
    name: name, 
    brand: brand, 
    price: price, 
    flavor: flavor, 
    quantity: quantity, 
    id: id
  };
}

// DELETE_PRODUCT
export const deleteProduct = (id) => ({
  type: c.DELETE_PRODUCT,
  id: id
})

// TOGGLE_FORM
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

// SELECT_PRODUCT
export const selectProduct = (product) => {
  const { name, brand, price, flavor, quantity, id} = product;
  return {
    type: c.SELECT_PRODUCT,
    name: name, 
    brand: brand, 
    price: price, 
    flavor: flavor, 
    quantity: quantity, 
    id: id
  };
}

// RESET_PRODUCT
export const resetProduct = () => ({
  type: c.RESET_PRODUCT
})

// TOGGLE_EDITING
export const toggleEditing = () => ({
  type: c.TOGGLE_EDITING
})