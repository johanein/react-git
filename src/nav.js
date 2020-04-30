import React, { memo } from 'react'
import {
    Link
  } from 'react-router-dom'

const Nav = memo( (props)=>{
    return (
        <nav >
        <ul className='Nav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/toast">Toast</Link>
          </li>
          <li>
            <Link to="/dnd">Drag and Drop</Link>
          </li>
          <li>
            <Link to="/advSearch">Advance Search</Link>
          </li>
          <li>
            <Link to="/countUp"> Count up</Link>
          </li>
        </ul>
      </nav>
    )
})


export default Nav
