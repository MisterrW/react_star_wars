import React from 'react';

const Planet = (props) => {
  console.log("working...?");
  console.log(props);
  return(
    <div>
    <h3>{props.planet.name}</h3>
    <ul>
    <li>Population: {props.planet.population}</li>
    </ul>
    </div>
    )
}

export default Planet;