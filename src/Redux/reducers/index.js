import { combineReducers } from 'redux'
import toastReducer from './toastReducer.js'
import jsonPlaceHolderReducer from './jsonPlaceHolderReducer'


const rootReducer = combineReducers({
    toastReducer,
    jsonPlaceHolderReducer
  })
  
  export default rootReducer