export default (state = false, action) => {
  switch (action.type) {
    case 'WATCHED':
      return action.payload
    default:
      return state
  }
}
