import React from 'react';
import Gamer from './Gamer';

const GamerList = props => {
    return (
        <div>
            <p>Lista de Gamers</p>
            <ol>
                {props.gamers.map((gamer, index) => <Gamer key={index} gamer={gamer} />)}                    
            </ol>
        </div>
    );

};

export default GamerList;