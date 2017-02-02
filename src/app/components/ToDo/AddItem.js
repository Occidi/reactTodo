import React from 'react';
import '../css/AddItem.scss';

const AddItem = React.createClass({
     propTypes: {
        onAdd: React.PropTypes.func.isRequired,
    },
    render() {
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" name="" required ref="newItem" />
                <input type="submit" name="" value="Lets go boiii" />
            </form>
        );
    },

    // handle function
    handleSubmit(e) {
        e.preventDefault();
        // create a random id for the todo
        let random = Math.floor(Math.random()*100000);
        let todo = {};
        todo.id = random;
        todo.name = this.refs.newItem.value;
        todo.type = 'eau';
        console.log(todo);
        this.props.onAdd(todo);
    },
});

module.exports = AddItem;
