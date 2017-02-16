import React from 'react';
import Person from './Person';
import Querier from '../models/querier';
import {Link} from 'react-router';
import Planets from './Planets';
import Filmss from './Films';

class People extends React.Component {

  constructor(props) {
    super();
    this.querier = new Querier();
    console.log("hello");
    this.state = {people: {}, peopleArr: []};
    this.stateLike = {people: {}, peopleArr: []};
  }

  buildPeople(baseURL){
    for(var i=1; i<11; i++){
      let thisURL = baseURL + "people/" + i;
      this.makeQuery(thisURL, function(response){
        this.stateLike.people[response.name] = response;
        this.stateLike.peopleArr.push(response);
        this.setState(this.stateLike);
      }.bind(this));
    }
  }

  makeQuery(url, callback){
    var maker = this.querier.make.bind(this);
    maker(url, callback.bind(this));
  }

  componentDidMount() {
    document.querySelector(".subHead").innerText = "//people";
    this.buildPeople("http://www.swapi.co/api/");
  }

  render(){
   var peopleElementArr = []
   for(var aperson in this.state.peopleArr){
     let person = this.state.peopleArr[aperson];
     peopleElementArr.push(<Person key={person.name} person={person}></Person>);
   }

   return(
    <div>
    <div className="links">
          <div className="link"><Link to="/films">Films</Link></div>
          <div className="link"><Link to="/planets">Planets</Link></div>
          <div className="link"><Link to="/people">People</Link></div>
          </div>
    <div className="flexy">
    {peopleElementArr}
    </div>
    </div>
    )
 }
}

export default People;