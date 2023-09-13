
import React from 'react';

const Player = (props) => {
  return (
    <div className="player-card">
      <img src={props.image} alt={props.fullname} />
      <h2>{props.fullname}</h2>
      <p>Born: {props.born}</p>
      <p>First Team: {props.firstteam}</p>
      <p>Goals: {props.goals}</p>
    </div>
  );
};

export default Player;
