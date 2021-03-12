import React from 'react';

const PersonCard = props => {
  return(
    <div className="card">
      <h2 className="card-title">{props.lastName}, {props.firstName}</h2>
      <ul className="card-body list-unstyled">
        <li>Age: {props.age}</li>
        <li>Hair Color: {props.hairColor}</li>
      </ul>
    </div>
  );
}

export default PersonCard;