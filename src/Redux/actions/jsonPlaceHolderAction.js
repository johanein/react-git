
import {
    SAVE_JSON_PLACEHOLDER,
    CLEAR_JSON_PLACEHOLDER
} from '../constants'

import network from './network'

 const jsonPlaceholderActionCreator = (payload) => ({
    type:SAVE_JSON_PLACEHOLDER,
    payload
})
 const jsonPlaceholderCleanReq = (payload) => ({
    type:CLEAR_JSON_PLACEHOLDER,
    payload
})

const netWorkFunction = async ({url}) => {
    const response = await network.get(url)
return response
}

 const jsonPlaceholderGetReq = () =>{
    return async (dispatch)=>{
        const payload = await netWorkFunction({url:'https://jsonplaceholder.typicode.com/posts'})
        dispatch(jsonPlaceholderActionCreator(payload.data))
    }  
}




export {
    jsonPlaceholderGetReq,
    jsonPlaceholderActionCreator,
    jsonPlaceholderCleanReq
}