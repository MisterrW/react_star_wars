import React from 'react';
import Planet from './planet';
import {Link} from 'react-router';
import Querier from '../models/querier'

class Planets extends React.Component {

  constructor(props) {
    super();
    this.querier = new Querier();
    this.state = {planets: {}, planetsArr: []};
    this.stateLike = {planets: {}, planetsArr: []};
  }

  componentDidMount() {
    document.querySelector(".subHead").innerText = "//planets";
    this.buildPlanets("http://www.swapi.co/api/");
  }

  buildPlanets(baseURL){
    for(var i=1; i<11; i++){
      let thisURL = baseURL + "planets/" + i;
      this.makeQuery(thisURL, function(response){
        this.stateLike.planets[response.name] = response;
        this.stateLike.planetsArr.push(response);
        this.setState(this.stateLike);
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
      <div className="links">
            <div className="link"><Link to="/films">Films</Link></div>
            <div className="link"><Link to="/planets">Planets</Link></div>
            <div className="link"><Link to="/people">People</Link></div>
            </div>
      <div className="flexy">
      {planetsElementArr}
      </div>
      </div>
      )
  }
}

export default Planets;