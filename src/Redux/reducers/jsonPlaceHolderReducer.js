import {
  SAVE_JSON_PLACEHOLDER
  } from '../constants'
  
  const initialState = {
    jsonAxiosGetResult:[]
  }
  
  export default function jsonPlaceHolderReducer(state = initialState,action) {
    switch (action.type) {
        case SAVE_JSON_PLACEHOLDER:{
          console.log('action.payload',action.payload)
        return {
          ...state,
          jsonAxiosGetResult: action.payload
        }
      }

      default:
        return state
    }
  }
  