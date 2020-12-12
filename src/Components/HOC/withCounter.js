import React , {useState} from 'react'

function withCounter(OriginalComponent,incrementNumber) {
    
    const EnhancedComponent =(props)=> {
const [count, setCount] = useState(0)

        const handleClick = () => {
            setCount(c=>c+incrementNumber)
        }
        return (
            <OriginalComponent count={count} handleClick={handleClick} {...props}/>
        )
    }
    
    
    return EnhancedComponent
}

export default withCounter
