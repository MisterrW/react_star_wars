import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import People from '../components/People';
import Planets from '../components/Planets';
import Films from '../components/Films';

class Controller {
  constructor(){
  }
  
  render(){
    ReactDOM.render(
      <Router history={hashHistory}>
      <Route path="/" component={Films}>
      <IndexRoute component={Films} />
      <Route path="Films" component={Films}/>
      </Route>
      <Route path="People" component={People}/>
      <Route path="Planets" component={Planets}/>
      </Router>,
      document.querySelector('#app')
      )
  }
}

export default Controller;