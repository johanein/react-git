import React, { memo, Suspense } from 'react'

const Lazy = memo(function lazy(props) {
    const loading = () => (<div style = {{color:'black'}}>
    Loading.....
    </div>)
    
    return (
        <Suspense 
    fallback={loading()}
        >
            {props.children}
        </Suspense>
    )
})

export default Lazy
