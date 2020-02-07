import React from 'react';
import { Provider } from 'react-redux'
import store from './Redux/store'
import './App.css'
import ToastComponent from './Components/toastComponent'


class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App' >
          <ToastComponent />
        </div>
      </Provider>
    )
  }
}

export default App

