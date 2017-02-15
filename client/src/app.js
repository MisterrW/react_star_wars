import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

window.onload = function(){
  const data = {
    hello: "hello",
    bye: "goodbye"
  };

  ReactDOM.render(
    <Main data={data}></Main>, document.querySelector('#app')
    )
}