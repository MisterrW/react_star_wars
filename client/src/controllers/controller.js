import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import People from '../components/People';
import Planets from '../components/Planets';
import Querier from '../models/querier';

class Controller {
  constructor(){
    this.querier = new Querier();
    this.data = {
      hello: "hello",
      bye: "goodbye"
    }
    this.people = {};
    this.planets = {};
    this.films = {};
  }

  // buildPeople(baseURL){
  //   for(var i=1; i<11; i++){
  //     let thisURL = baseURL + "people/" + i;
  //     console.log(thisURL);
  //     this.makeQuery(thisURL, function(response){
  //       console.log(this);
  //       this.people[response.name] = response;
  //       this.render();
  //       if (Object.keys(this.people).length === 10){
  //         console.log(this.people);
  //       }
  //     }.bind(this));
  //   }
  // }

  // buildPlanets(baseURL){
  //   for(var i=1; i<11; i++){
  //     let thisURL = baseURL + "planets/" + i;
  //     console.log(thisURL);
  //     this.makeQuery(thisURL, function(response){
  //       console.log(this);
  //       this.planets[response.name] = response;
  //       this.render();
  //       if (Object.keys(this.planets).length === 10){
  //         console.log(this.planets);
  //       }
  //     }.bind(this));
  //   }
  // }

  // buildFilms(baseURL){
  //   for(var i=1; i<8; i++){
  //     let thisURL = baseURL + "films/" + i;
  //     console.log(thisURL);
  //     this.makeQuery(thisURL, function(response){
  //       console.log(this);
  //       this.films[response.title] = response;
  //       this.render();
  //       if (Object.keys(this.films).length === 7){
  //         console.log(this.films);
  //       }
  //     }.bind(this));
  //   }
  // }

  // makeQuery(url, callback){
  //   var maker = this.querier.make.bind(this);
  //   maker(url, callback.bind(this));
  // }
  
  render(){
    ReactDOM.render(
      <Router history={hashHistory}>
      <Route path="/" component={People}>
      <IndexRoute component={People} />
      <Route path="people" component={People}/>
      </Route>
      <Route path="planets" component={Planets}/>
      </Router>,
      document.querySelector('#app')
      )
  }
}

export default Controller;