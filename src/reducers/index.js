import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import plays from './plays'
import filter from './filter'
import fetching from './fetching'
import watched from './watched'

export default combineReducers({
  routing: routerReducer,
  plays,
  filter,
  fetching,
  watched
})
