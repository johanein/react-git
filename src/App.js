import React from 'react';
import { Provider } from 'react-redux'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import 'tippy.js/dist/tippy.css'; 
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import store from './Redux/store'
import ToastComponent from './Components/Toast/toastComponent'
import Home from './Components/home'
import AdvancedSearch from './Components/advanceSearch'
import DragAndDrop from './Components/DragAndDrop/dragAndDrop'
import Nav from './nav'

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
            <Nav/>
            <Switch>
              <Route
                path="/toast"
                render={(props) => (
                  <ToastComponent />
                )}
              />
              <Route path="/dnd"
                render={(props) => (
                  <DragAndDrop />
                )}
              />
              <Route exact path="/advSearch">
                <AdvancedSearch />
              </Route>
              <Route exact path="/">
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

