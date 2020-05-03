import React, { memo,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import styles from './logout.module.css'
import { logoutActionCreator } from '../../Redux/actions/logoutAction'

const Logout = memo((props)=>{
    const dispatch = useDispatch()
    let history = useHistory();
    useEffect(() => {
        dispatch(logoutActionCreator(false))
    }, [])
    const handleOnClick = (params) => {
        dispatch(logoutActionCreator(true))
        history.push("/home");
    }
    
    return (
        <div className={styles.logoutMain}>
            <div> username <input/></div>
            <div> password <input type='password'/></div><br/>
            <div onClick={handleOnClick}><button type='submit'>submit</button></div>
        </div>
    )
})


export default Logout
