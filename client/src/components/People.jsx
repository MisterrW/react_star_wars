import React from 'react';
import Person from './Person';
import Querier from '../models/querier'

class People extends React.Component {
  // hello(){
  //   return "hello";
  // }
  constructor(props) {
    super();
    this.querier = new Querier();
    console.log("hello");
    this.people = {};
    this.buildPeople("http://www.swapi.co/api/");
  }

  buildPeople(baseURL){
    for(var i=1; i<11; i++){
      let thisURL = baseURL + "people/" + i;
      console.log(thisURL);
      this.makeQuery(thisURL, function(response){
        console.log(this);
        this.people[response.name] = response;
        this.render();
        if (Object.keys(this.people).length === 10){
          console.log(this.people);
        }
      }.bind(this));
    }
  }

  makeQuery(url, callback){
    var maker = this.querier.make.bind(this);
    maker(url, callback.bind(this));
  }

  componentDidMount() {
    console.log("hello")
    console.log(this.props);
    this.state = this.props;
  }

  componentDidUpdate() {
    console.log("I updated")
    console.log(this.props);
  }

  render(){
    console.log("rendering");
    let peopleArray = [];
    for(var person in this.people){
      console.log(person);
      peopleArray.push(this.people[person]);
    }
    return(
      <div>
      {peopleArray.map(function(person, index)
        {
          console.log(person);
          return <Person key={index} person={person}></Person>;
        }
        )
    }
    </div>
    )
  }
}

export default People;