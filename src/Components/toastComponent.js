import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toastOpenActionCreator } from '../Redux/actions/toastAction'
import { jsonPlaceholderGetReq } from '../Redux/actions/jsonPlaceHolderAction'


const Button = (props) => <button id='toastButton' type='button' onClick={props.onClick}>
  {props.children}
</button>

const toastComponent = (props) => {
const {jsonPlaceGetAxios, jsonAxiosGetResult} = props

  const [toastState, setToastState] = useState({})

  const handleClick = () => {    
    setToastState({
      ...toastState,
      name: prompt("Enter Whatever")
    })
  }

  useEffect(() => {
    notify()
  }, [toastState])

  useEffect(() => {
    jsonPlaceGetAxios()
  }, [])

  const notify = () => {
    return toast(toastState.name)
  }

  return (
    <div className='Toast'>
      <Button onClick={handleClick}>Button</Button>
      <ol>      
{jsonAxiosGetResult.map((ele)=><li><b>{ele.title}</b></li>)}      
      </ol>
      <ToastContainer />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    name: state.toastReducer.name,
    jsonAxiosGetResult: state.jsonPlaceHolderReducer.jsonAxiosGetResult
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openToast: () => dispatch(toastOpenActionCreator()),
    jsonPlaceGetAxios: () => dispatch(jsonPlaceholderGetReq())
  }
}

export default React.memo(connect(
  mapStateToProps,
  mapDispatchToProps
)(toastComponent))
