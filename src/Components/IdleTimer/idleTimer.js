import React, { memo, useRef,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import IdleTimer from 'react-idle-timer'
import Tippy from '@tippyjs/react';
import Modal from '../Modal/modal'
import { logoutActionCreator } from '../../Redux/actions/logoutAction'

const IdleTimeComp = memo((props)=>{

    const loginState = useSelector(state => state.logoutReducer.loginState)
    const dispatch = useDispatch()
    let history = useHistory();
    const IdleRef = useRef(null)
    const sessionTimeoutRef = useRef(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const logoutFunction = () => {
        dispatch(logoutActionCreator(false))
            history.push("/");
    }    
    const onIdle = () => {
        setModalIsOpen(true)
        sessionTimeoutRef.current = setTimeout(() => {
            setModalIsOpen(false)
            logoutFunction()
        }, 5000);
    }
    const buttonClick = (logoutTrue) =>()=> {
        setModalIsOpen(false)
        if (logoutTrue) {
            clearTimeout(sessionTimeoutRef.current)
            logoutFunction()
        }else {
            clearTimeout(sessionTimeoutRef.current)
        }
    }
    
    
    return (
        <>
        {loginState?<IdleTimer
        ref={IdleRef}
        onIdle={onIdle}
        timeout={1000 * 600} />:null}
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={buttonClick(false)}
      >
          <h1>Do you want to logout ?</h1>
          <Tippy content='logout'><button onClick={buttonClick(true)} > Yes</button></Tippy>
          <Tippy content='active'><button onClick={buttonClick(false)} > No</button></Tippy>
          </Modal>
          </>
    )
})
export default IdleTimeComp
