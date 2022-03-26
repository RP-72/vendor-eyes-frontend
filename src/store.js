import { createStore } from 'redux'
import reducer from './reducers/index'
console.log("reduxer is this",reducer);
const store = createStore(reducer)
export default store;