
import {
    SAVE_JSON_PLACEHOLDER
} from '../constants'

import network from './network'

export const jsonPlaceholderActionCreator = (payload) => ({
    type:SAVE_JSON_PLACEHOLDER,
    payload
})


export const jsonPlaceholderGetReq = () =>{
    return (dispatch)=>network
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((payload)=>{
        // console.log('the response :', payload)
        dispatch(jsonPlaceholderActionCreator(payload.data))
    })
}