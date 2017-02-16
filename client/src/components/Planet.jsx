import React from 'react';

const Planet = (props) => {
  return(
    <div className="displayBox">
    <h3>{props.planet.name}</h3>
    <ul>
    <li>Population: {props.planet.population}</li>
    </ul>
    </div>
    )
}

export default Planet;