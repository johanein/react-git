import React, { useState, useEffect, forwardRef }  from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import Tippy from '@tippyjs/react';
import { toastOpenActionCreator } from '../Redux/actions/toastAction'
import { jsonPlaceholderGetReq } from '../Redux/actions/jsonPlaceHolderAction'


const Button = forwardRef((props,ref) => <button id='toastButton' ref={ref} type='button' onClick={props.onClick}>
  {props.children}
</button>
)
const ToastComponent = () => {
// const {jsonPlaceGetAxios} = props

const jsonAxiosGetResult = useSelector(state => state.jsonPlaceHolderReducer.jsonAxiosGetResult)
const dispatch = useDispatch()

  const [toastState, setToastState] = useState({})

  const handleClick = () => {    
    setToastState({
      ...toastState,
      name: prompt("Enter Whatever")
    })
  }

  useEffect(() => {
    toast(toastState.name)
  }, [toastState])

  useEffect(() => {
    dispatch(jsonPlaceholderGetReq())
  }, [])

  return (
    <div className='Toast'>
     <Tippy content="Hello"><Button onClick={handleClick}>Button</Button></Tippy>
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openToast: () => dispatch(toastOpenActionCreator()),
    // jsonPlaceGetAxios: () => dispatch(jsonPlaceholderGetReq())
  }
}

export default React.memo(connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastComponent))
