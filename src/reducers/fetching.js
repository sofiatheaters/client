export default (state = false, action) => {
  switch (action.type) {
    case 'START_FETCHING':
      return true
    case 'STOP_FETCHING':
      return false
    default:
      return state
  }
}
