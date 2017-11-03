export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_PLAYS':
      return action.payload
    default:
      return state
  }
}