import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'service/Loadable'
import { inject, observer } from 'mobx-react'
import Nav from 'component/Nav'


const App = ()=> {
  
  return (
    <Router>
      <Nav>
        <Switch>
          <Route exact path='/'     component={Loadable({loader:()=>import('./page/home')})}/>
          <Route exact path='/serv' component={Loadable({loader:()=>import('./page/serv')})}/>
          <Route exact path='/info' component={Loadable({loader:()=>import('./page/info')})}/>
          <Route exact path='/orde' component={Loadable({loader:()=>import('./page/orde')})}/>
          <Route exact path='/acce' component={Loadable({loader:()=>import('./page/acce')})}/>
          <Route exact path='/ques' component={Loadable({loader:()=>import('./page/ques')})}/>
        </Switch>
      </Nav>
    </Router>
  )
  
}


export default App