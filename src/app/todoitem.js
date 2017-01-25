import React from 'react';
import './css/ToDoItem.scss';

// Creating ToDoItem component
let ToDoItem = React.createClass({
    propTypes: {
        item: React.PropTypes.string.isRequired,
        onDelete: React.PropTypes.func.isRequired,
    },
    render() {
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete"
                    onClick={this.handleDelete}> X </span>
                </div>
            </li>
        );
    }, // render

    // handle function
    handleDelete() {
        this.props.onDelete(this.props.item);
    },
});

module.exports = ToDoItem;
