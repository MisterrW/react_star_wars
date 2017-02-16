import React from 'react';

const Film = (props) => {
  return(
    <div className="displayBox">
    <h3>{props.film.title}</h3>
    <ul>
    <li>{props.film.opening_crawl}</li>
    </ul>
    </div>
    )
}

export default Film;