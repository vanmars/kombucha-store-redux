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

})

// TOGGLE_FORM
export const toggleForm = () => ({

})

// SELECT_PRODUCT
export const selectProduct = (product) => ({

})

// RESET_PRODUCT
export const resetProduct = () => ({

})

// TOGGLE_EDITING
export const toggleEDITING = () => ({

})