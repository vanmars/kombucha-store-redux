// ADD_PRODUCT
export const addProduct = (product) => {
  const { name, brand, price, flavor, quantity, id} = product;
  return {
    type: 'ADD_PRODUCT',
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
  type: 'DELETE_PRODUCT',
  id: id
})

// TOGGLE_FORM
export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
})

// SELECT_PRODUCT
export const selectProduct = (product) => {
  const { name, brand, price, flavor, quantity, id} = product;
  return {
    type: 'SELECT_PRODUCT',
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
  type: 'RESET_PRODUCT'
})

// TOGGLE_EDITING
export const toggleEditing = () => ({

})