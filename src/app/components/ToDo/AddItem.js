import React from 'react';
import '../css/AddItem.scss';

const AddItem = React.createClass({
     propTypes: {
        onAdd: React.PropTypes.func.isRequired,
    },

    getInitialState: () => {
        return{
            nameValue: '',
        };
    },

    handleChange(e) {
        this.setState({
            nameValue: e.target.value,
        });
    },

    // handle function
    handleSubmit(e) {
        e.preventDefault();
        // create a random id for the todo
        let random = Math.floor(Math.random()*100000);
        let todo = {};
        todo.id = random;
        todo.name = this.state.nameValue;
        todo.type = 'eau';
        this.props.onAdd(todo);
        this.setState({
            nameValue: ['Thing to do'],
        });
    },
    render() {
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name=""
                    value={this.state.nameValue}
                    onChange={this.handleChange}
                    required />
                <input
                    type="submit"
                    name=""
                    value="Lets go boiii" />
            </form>
        );
    },

    componentWillMount() {
        this.setState({
            nameValue: ['Thing to do'],
        });
    },

});

module.exports = AddItem;
