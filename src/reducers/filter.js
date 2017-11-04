export default (state = '', action) => {
  switch (action.type) {
    case 'FILTER_PLAYS':
      return action.payload
    default:
      return state
  }
}
