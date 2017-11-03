import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import plays from './plays'

export default combineReducers({
  routing: routerReducer,
  plays
})