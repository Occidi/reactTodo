const React = require('react');
const ReactDOM = require('react-dom');

// Creating ToDoComponent component
let ToDoComponent = React.createClass({
    getInitialState: function() {
        return{
            todos: ['watch', 'create', 'fuck'],
            age: 10,
        };
    },
    render: function() {
        setTimeout(function() {
            this.setState({
            age: 100000,
            });
        }.bind(this), 3000);

        let todos = this.state.todos;
        todos = todos.map(function(item, index) {
            return(
                <ToDoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));

        return(
            <div id="todo-list">
                <p>Epic memes for epic dreams... </p>
                <p>{this.state.age}</p>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }, // render

    onDelete: function(item) {
        let updatedTodos = this.state.todos.filter(function(val, index) {
            return item !== val;
        });
        this.setState({
            todos: updatedTodos,
        });
    },
});

// Creating ToDoItem component
let ToDoItem = React.createClass({
    propTypes: {
        item: React.PropTypes.string.isRequired,
        onDelete: React.PropTypes.func.isRequired,
    },
    render: function() {
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
    handleDelete: function() {
        this.props.onDelete(this.props.item);
    },
});

ReactDOM.render(<ToDoComponent/>, document.getElementById('todo-wrapper'));
