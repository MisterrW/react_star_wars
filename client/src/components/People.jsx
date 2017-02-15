import React from 'react';
import Person from './Person';

class People extends React.Component {
  // hello(){
  //   return "hello";
  // }
  constructor(props) {
    super();
    console.log("hello");
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
    let peopleArray = [];
    for(var person in this.props.people){
      peopleArray.push(this.props.people[person]);
    }
    return(
      <div>
      <div>
      {peopleArray.map(function(person, index)
        {
         return <Person key={index} person={person}></Person>;
       }
       )
    }
    </div>
    </div>
    )}
  }

  export default People;