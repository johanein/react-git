import React from 'react';
import { Provider } from 'react-redux'
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router
} from 'react-router-dom'
import store from './Redux/store'
import './App.css'
import ToastComponent from './Components/toastComponent'
import Home from './Components/home'




class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App' >
          < Router >
            <nav >
              <ul className='Nav'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/toast">Toast</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route
                path="/toast"
                render={(props) => (
                  <ToastComponent />
                )}
              />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App

