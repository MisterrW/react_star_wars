import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main';
import Querier from '../models/querier';

class Controller {
  constructor(){
    this.querier = new Querier();
    this.data = {
      hello: "hello",
      bye: "goodbye"
    }
  }
  
  render(){
    ReactDOM.render(
      <Main data={this.data}></Main>, document.querySelector('#app')
      )
  }
}

export default Controller;