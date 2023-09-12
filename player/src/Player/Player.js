import React from 'react';
import './Player.css';

function Player() {
    const players = [
        {
            fullname: 'Xavi',
            born: 'January 25, 1980',
            firstteam: 'FC Barcelona',
            image: '/images/xavi.jpeg',
            goals: 85 ,
        },
        {
            fullname: 'inesta',
            born: 'May 11, 1984',
            firstteam: 'FC Barcelona',
            image: '/images/inesta.jpeg',
            goals: 57,
        },
        {
            fullname: 'Ronaldinho',
            born: 'March 21, 1980',
            firstteam: 'FC Barcelona',
            image: '/images/ronaldiniho.jpeg',
            goals: 66,
        },
        
            {
                fullname: 'Neymar',
                born: '23 October 1940',
                firstteam: 'Santos FC',
                image: '/images/neymar.jpeg',
                goals:  78,
            },
        ];
    
        return (
            <div className="Player">
                <h1>List of Players</h1>
                <ul className="players-list">
                    {players.map((player) => (
                        <li  className="player-item">
                            <img
                                src={player.image}
                                alt={`${player.fullname} Image`}
                                className="player-image"
                            />
                            <div className="player-details">
                                <div className="player-name">{player.fullname}</div>
                                <div className="player-birth"><strong>Born:</strong>{player.born}</div>
                            <div className="player-teams">
                                <strong>First Team:</strong> {player.firstteam}
                                <br />
                            </div>
                            <div className="player-goals"><strong>Total Goals:</strong> {player.goals}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Player;