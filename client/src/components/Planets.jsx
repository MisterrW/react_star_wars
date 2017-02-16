import React from 'react';
import Planet from './planet';
import {Link} from 'react-router';
import Querier from '../models/querier'

class Planets extends React.Component {
  // hello(){
  //   return "hello";
  // }
  constructor(props) {
    super();
    this.querier = new Querier();
    this.state = {planets: {}, planetsArr: []};
    this.stateLike = {planets: {}, planetsArr: []};
  }

  componentDidMount() {
      this.buildPlanets("http://www.swapi.co/api/");
    }

  buildPlanets(baseURL){
    for(var i=1; i<11; i++){
      let thisURL = baseURL + "planets/" + i;
      this.makeQuery(thisURL, function(response){
        this.stateLike.planets[response.name] = response;
        this.stateLike.planetsArr.push(response);
        this.setState(this.stateLike);
        if (Object.keys(this.state.planets).length === 10){
        }
      }.bind(this));
    }
  }

  makeQuery(url, callback){
    var maker = this.querier.make.bind(this);
    maker(url, callback.bind(this));
  }

  render(){
    var planetsElementArr = []
    for(var aplanet in this.state.planetsArr){
      let planet = this.state.planetsArr[aplanet];
      planetsElementArr.push(<Planet key={planet.name} planet={planet}></Planet>);
    }
    
    return(
      <div>
      <ul>
        <li>
          <Link to="/planets">planets</Link>
        </li>
        <li>
          <Link to="/people">people</Link>
        </li>
      </ul>
      <div>
      {planetsElementArr}
    </div>
    </div>
    )
  }
}

export default Planets;