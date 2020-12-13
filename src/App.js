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
import ErrorBoundary from './Components/ErrorBoundary'

const Routes = () => {
  return navItems.map(({url,component})=>(
    <Route exact key={url} path={`/${url}`}>
<ErrorBoundary>
    {component}
</ErrorBoundary>
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
