import { combineReducers } from 'redux'
import toastReducer from './toastReducer.js'
import modalReducer from './modalReducer.js'


const rootReducer = combineReducers({
    toastReducer,
    modalReducer
  })
  
  export default rootReducer