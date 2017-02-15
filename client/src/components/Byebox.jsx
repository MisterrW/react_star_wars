import React from 'react';

const Byebox = (props) => {
  return(
    <ul>
    <li>{props.data.hello}</li>
    <li>{props.data.bye}</li>
    </ul>
    )
}

export default Byebox;