import React from 'react';

const Film = (props) => {
  return(
    <div className="displayBox">
    <h3>{props.film.title}</h3>
    <p>{props.film.opening_crawl}</p>
    </div>
    )
}

export default Film;