import React from 'react';
import '../css/AddItem.scss';

let AddItem = React.createClass({
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
        this.props.onAdd(this.refs.newItem.value);
    },
});

module.exports = AddItem;
