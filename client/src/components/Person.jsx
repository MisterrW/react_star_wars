import React from 'react';

const Person = (props) => {
  console.log("working...?");
  return(
    <div>
    <h3>{props.person.name}</h3>
    <ul>
    <li>Height: {props.person.height} cm</li>
    <li>Hair colour: {props.person.hair_color}</li>
    <li>Eye colour: {props.person.eye_color}</li>
    </ul>
    </div>
    )
}

export default Person;