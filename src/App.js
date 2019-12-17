import React from 'react';
import './App.css'

const Button = (props) => <button onClick={props.onClick}>{props.children}</button>
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleClick=()=>{
   this.setState({name: prompt("Please enter your name", "Albert")})
  }

render(){
  const {name} = this.state
  return(
  <div className='App' >
      <Button onClick={this.handleClick}>Button</Button>
     <h1>{name}</h1>
      </div>
  )
  }
}

export default App;

