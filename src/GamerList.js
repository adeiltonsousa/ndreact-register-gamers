import React from 'react';
import Gamer from './Gamer';

const GamerList = props => {
    return (
        <div>
            {JSON.stringify(props.gamers)}
            <p>Lista de Gamers</p>
            <ol>
                {props.gamers.map((gamer, index) => <Gamer gamer={gamer} />)}                    
            </ol>
        </div>
    );
};

export default GamerList;