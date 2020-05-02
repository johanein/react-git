import React, { memo } from 'react'
import {
    Link
  } from 'react-router-dom'
  import navItems from './navItems'

const Nav = memo( (props)=>{
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
})


export default Nav
