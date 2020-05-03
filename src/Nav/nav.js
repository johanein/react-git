import React, { memo } from 'react'
import {
    Link
  } from 'react-router-dom'
import {  useSelector  } from 'react-redux'
  import navItems from './navItems'

const Nav = memo( (props)=>{
  const loginState = useSelector(state => state.logoutReducer.loginState)
   if(loginState) 
    return (
        <nav >
        <ul className='Nav'>
          {navItems.map(({url,name})=>(
            <li>
            <Link to={url}>{name}</Link>
          </li>
          ))}
        </ul>
      </nav>
    )
    else {return null}
})


export default Nav
