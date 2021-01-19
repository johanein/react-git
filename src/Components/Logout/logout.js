import React, { memo,useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useHistory } from "react-router-dom";
import styles from './logout.module.css'
import { logoutActionCreator } from '../../Redux/actions/logoutAction'

const Logout = memo((props)=>{
    const dispatch = useDispatch();
    const [formDatas, setFormDatas] = useState({
        username:'',
        password:'',
    })
    // let history = useHistory();

    useEffect(() => {
        dispatch(logoutActionCreator(false))
    }, []);

    const handleOnchange = (event) => {
        const {name, value} = event.target || {}
        setFormDatas((s) => ({
            ...s,
            [name]:value
        }));
    }
    
    const handleOnSubmit = (event) => {
        console.log('formDatas :', formDatas);
        event.preventDefault();
        // dispatch(logoutActionCreator(true))
        // history.push("/home");
    };
    
    return (
        <div className={styles.logoutMain}>
            <form onSubmit={handleOnSubmit}>
            <input type='text' name='username' onChange={handleOnchange}/>
            <input type='password' name='password' onChange={handleOnchange}/>
            <button type='submit'>submit</button>
            </form>
            {/* <div onClick={handleOnSubmit}></div> */}
        </div>
    )
})


export default Logout
