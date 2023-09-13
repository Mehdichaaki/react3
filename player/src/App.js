
import React from 'react';
import './App.css';
import Player from './Player';

const playersData = [
  {
    fullname: 'Xavi',
    born: 'January 25, 1980',
    firstteam: 'FC Barcelona',
    image: '/images/xavi.jpeg',
    goals: 85,
  },
  {
    fullname: 'Iniesta',
    born: 'May 11, 1984',
    firstteam: 'FC Barcelona',
    image: '/images/inesta.jpeg',
    goals: 57,
  },
  {
    fullname: 'Ronaldinho',
    born: 'March 21, 1980',
    firstteam: 'FC Barcelona',
    image: '/images/ronaldinho.jpeg',
    goals: 66,
  },
  {
    fullname: 'Neymar',
    born: 'February 5, 1992',
    firstteam: 'Santos FC',
    image: '/images/neymar.jpeg',
    goals: 78,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Football Players</h1>
      <div className="player-list">
        {playersData.map((player) => (
          <Player {...player} />
        ))}
      </div>
    </div>
  );
}

export default App;
