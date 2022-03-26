import { combineReducers } from 'redux'
import counter from './testing'
import cnter from './testing2'
const temp = combineReducers({
  counter,
  cnter
})
export default temp