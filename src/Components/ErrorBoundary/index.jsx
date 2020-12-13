import React, { Component } from 'react'
 class index extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              hasError : false
         }
     }
     
     static getDerivedStateFromError(error) {
         return {
            hasError : true
         }
     }
     componentDidCatch(error,info){
         console.log(error);
console.log(info)
     }
    render() {
        const {hasError} = this.state
        const {children} = this.props
        if(hasError){return (
            <h1>
                Something went wrong
            </h1>
        )
    }
    return children
    }
}

export default index
