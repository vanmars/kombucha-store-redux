export default (state=false, action) => {
  switch(action.type) {
    case 'TOGGLE_FORM':
      return
    default:
      return state;
  }
}