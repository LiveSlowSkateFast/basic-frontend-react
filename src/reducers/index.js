import { combineReducers } from 'redux'
import audience from './audience'
import responseBody from './responseBody'
import responseTypes from './responseTypes'
import scopes from './scopes'

export default combineReducers({
  audience,
  responseBody,
  responseTypes,
  scopes,
})