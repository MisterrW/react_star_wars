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
    return(
      <div>
      <h1>A person</h1>
      <ListElement>this.props.people</ListElement>
      </div>
      )}
  }

  export default Main;