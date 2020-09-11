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
import IdleTimeComp from './Components/IdleTimer/idleTimer'
import Nav from './Nav/nav'
import navItems from './Nav/navItems'

const Routes = () => {
  return navItems.map(({path,component})=>(
    <Route exact key={path} path={`${path}`}>
    {component}
  </Route>
  ))
}

const App = memo(function App(props) {
  return (
    <Provider store={store}>
    <div className='App' >
      < Router >
      <IdleTimeComp/>
        <Nav/>
        <Switch>
<Routes/>
        </Switch>
      </Router>
    </div>
  </Provider>
  )
})
export default App
