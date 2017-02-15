import React from 'react';
import Byebox from './Byebox';

class Main extends React.Component {
  // hello(){
  //   return "hello";
  // }
  constructor() {
    super();


    // this.state = this.props.data;
  }

  componentDidMount() {
    console.log(this.props);
    this.state = this.props;
  }

  render(){
    return(
    <div>
    <h1>{this.props.data.hello}</h1>
    <Byebox data={this.props.data}></Byebox>
    </div>
    )}
}

export default Main;