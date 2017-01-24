const React = require('react');
const ReactDOM = require('react-dom');
require('./css/index.scss');

// Module requires
let ToDoItem = require('./todoitem');
let AddItem = require('./addItem');

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
                <AddItem onAdd={this.onAdd}/>
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
    onAdd: function(item) {
        let updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos,
        });
    },
});

ReactDOM.render(<ToDoComponent/>, document.getElementById('todo-wrapper'));
