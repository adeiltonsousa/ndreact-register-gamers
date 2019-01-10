import React from 'react';

const Gamer = props => {
    return <li key={props.index}>
            <p>Usuário: {props.gamer.nome} {props.gamer.sobrenome}</p>
            <p>username: {props.gamer.username}</p>
            <p>Quantidade de Jogos: {props.gamer.ngames}</p>
            </li>
}

export default Gamer;