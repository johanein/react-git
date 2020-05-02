import React, { memo } from 'react'
import styles from './logout.module.css'

const Logout = memo((props)=>{
    return (
        <div className={styles.logoutMain}>
            <div> username <input/></div>
            <div> password <input type='password'/></div><br/>
            <div><button type='submit'>submit</button></div>
        </div>
    )
})


export default Logout
