export default (state=false, action) => {
  switch(action.type) {
    case 'TOGGLE_EDITING':
      return;
    default:
      return state;
  }
}