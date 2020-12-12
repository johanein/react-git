import React, { memo } from 'react'
import ButtonCounter from "./counter";

const index = memo( (props) => {
    return (
        <div>
            <ButtonCounter name='CounterName'/> 
        </div>
    )
})

export default index