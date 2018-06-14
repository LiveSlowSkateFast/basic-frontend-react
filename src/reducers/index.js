import { combineReducers } from 'redux'
import responseBody from './responseBody'
import responseTypes from './responseTypes'
import scopes from './scopes'

export default combineReducers({
  responseBody,
  responseTypes,
  scopes,
})