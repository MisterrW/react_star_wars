import React from 'react';
import Person from './Person';
import Querier from '../models/querier';
import {Link} from 'react-router';
import Planets from './planets';

class People extends React.Component {
  // hello(){
  //   return "hello";
  // }
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
        if (Object.keys(this.state.people).length === 10){
        }
      }.bind(this));
    }
  }

  makeQuery(url, callback){
    var maker = this.querier.make.bind(this);
    maker(url, callback.bind(this));
  }

  componentDidMount() {
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
      <ul>
        <li>
          <Link to="/planets">planets</Link>
        </li>
        <li>
          <Link to="/people">people</Link>
        </li>
      </ul>
       <div>
       {peopleElementArr}
     </div>
     </div>
     )
   }
}

export default People;