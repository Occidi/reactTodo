import React from 'react';
import '../css/ToDoItem.scss';

// Creating ToDoItem component
let ToDoItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
        name: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        onDelete: React.PropTypes.func.isRequired,
    },
    render() {
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.name}</span>
                    <span className="item-type">{this.props.type}</span>
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
