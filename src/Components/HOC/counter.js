import React, { memo } from 'react'
import withCounter from './withCounter'

const counter = memo( ({count,handleClick,name}) =>{
    return (
        <>
            <h1>{name}</h1>
            <button onClick={handleClick}>{`clicked ${count} times`}</button>
        </>
    )
})

export default withCounter(counter,2)
