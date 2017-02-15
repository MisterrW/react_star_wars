import React from 'react';
import ListElement from './ListElement';

class Main extends React.Component {
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
    let names = [];
    for(var person in this.props.people){
      names.push(this.props.people[person].name);
    }
    return(
      <div>
      <h1>A person</h1>
      <ul>
      {names.map(function(name, index){
                         return <ListElement name={name}></ListElement>;
                       })}
      </ul>
      </div>
      )}
  }

  export default Main;