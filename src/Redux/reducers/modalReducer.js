import {
  OPEN_MODAL,
  SAVE_JSON_PLACEHOLDER
  } from '../constants'
  
  const initialState = {
    modalOpen:false,
    jsonAxiosGetResult:[]
  }
  
  export default function modalReducer(state = initialState,action) {
    switch (action.type) {
      case OPEN_MODAL:{
        return {
          ...state,
          modalOpen: true
        }
      }

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
  