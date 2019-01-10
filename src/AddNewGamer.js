import React from 'react';

class AddNewGamer extends React.Component {
    state = {
        name:'',
        sobrenome:'',
    }

    handleChangeNome = event => {
        this.setState({
            name: event.target.value,
        })
    }

    handleChangeSobrenome = (event) => {
        this.setState({
            sobrenome: event.target.value
        })
    }

    addGamer = event => {
        event.preventDefault();
        const { name, sobrenome } = this.state;
        const { onAddGamer } = this.props;
        onAddGamer(`${name} ${sobrenome}`);
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    render() {
        return (
            <div>
            <form onSubmit={this.addGamer}>
                <input
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleChangeNome}
                />
                <input
                    type="text"
                    placeholder="Sobrenome"
                    name="sobrenome"
                    value={this.state.sobrenome}
                    onChange={this.handleChangeSobrenome}
                />
                <br />
                <label>Nº de Games</label>
                <input                
                type="number"
                value={0}
                /><br />
                <button disabled={this.inputIsEmpty()}>Registrar</button>
                {JSON.stringify(this.state)}
                <hr />
            </form>
            </div>
        );
    }
}

export default AddNewGamer;