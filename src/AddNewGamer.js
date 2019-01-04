import React from 'react';

class AddNewGamer extends React.Component {
    state = {
        value: {
            name:'',
            sobrenome:''
        },
    };

    handleChangeNome = event => {
        this.setState({ value: event.target.value });
    };

    handleChangeSobrenome = (event) => {
        this.setState({ value: event.target.value });
    };

    // UNINDO TODOS O INPUTS
    // handleInputChange = event => {
    //     const {name, value} = event.target

    //     this.setState({
    //         [name]:value
    //     })
    // };

    addGamer = event => {
        event.preventDefault();
        this.props.onAddGamer(this.state.value);
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
                    value={this.state.value.name}
                    onChange={this.handleChangeNome}
                />
                <input
                    type="text"
                    placeholder="Sobrenome"
                    name="sobrenome"
                    value={this.state.value.name}
                    onChange={this.handleChangeSobrenome}
                />
                <br />
                <label>Nº de Games</label>
                <input                
                type="number"
                value={0}
                /><br />
                <button disabled={this.inputIsEmpty()}>Registrar</button>
                <hr />
            </form>
            </div>
        );
    }
}

export default AddNewGamer;