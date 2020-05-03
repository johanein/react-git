import React, { memo } from 'react'
import { Provider } from 'react-redux'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import 'tippy.js/dist/tippy.css'; 
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import store from './Redux/store'
import ToastComponent from './Components/Toast/toastComponent'
import Home from './Components/Home/home'
import AdvancedSearch from './Components/AdvanceSearch/advanceSearch'
import DragAndDrop from './Components/DragAndDrop/dragAndDrop'
import CountUp from './Components/CountUp/countUp'
import Logout from './Components/Logout/logout'
import IdleTimeComp from './Components/IdleTimer/idleTimer'
import Nav from './Nav/nav'

const App = memo(function App(props) {
  return (
    <Provider store={store}>
    <div className='App' >
      < Router >
      <IdleTimeComp/>
        <Nav/>
        <Switch>
          <Route
            path="/toast"
            render={(props) => (
              <ToastComponent />
            )}
          />
          <Route path="/dnd"
            component = {DragAndDrop}                  
          />
          <Route exact path="/advSearch">
            <AdvancedSearch />
          </Route>
          <Route exact path="/countUp">
            <CountUp />
          </Route>
          <Route exact path="/">
            <Logout />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  </Provider>
  )
})

App.propTypes = {

}

export default App
