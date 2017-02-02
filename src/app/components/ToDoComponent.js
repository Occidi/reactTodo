import React from 'react';
import './css/index.scss';
import {Link} from 'react-router';

// Modules
import ToDoItem from './ToDo/TodoItem';
import AddItem from './ToDo/AddItem';


// Creating ToDoComponent component
let ToDoComponent = React.createClass({
    getInitialState: () => {
        return{
            todos: [],
        };
    },

    onDelete(item) {
        let updatedTodos = this.state.todos.filter(function(val, index) {
            return item !== val;
        });
        this.setState({
            todos: updatedTodos,
        });
    },
    onAdd(item) {
        let updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos,
        });
    },

    render() {
        let todos = this.state.todos;
        // si objet add Object.keys()

        // parcours l'array todos avec .map
        // et return un ToDoItem pour chaque item
        todos = todos.map(function(item, index) {
            return(
                <ToDoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));

        return(
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <p>Epic memes for epic dreams... </p>
                <ul>
                    {todos}
                </ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }, // render
    // lifecycle functions
    componentWillMount() {
        this.setState({
            todos: ['waitingforData'],
        });
        console.log('componentWillMount');
    },

    componentDidMount() {
        console.log('componentDidMount');
        // any grabbing of external data
        setTimeout(() => {
            this.setState({
                todos: ['externalData', 'externalData2'],
            });
        }, 5000);
    },

    componentWillUpdate() {
        // a chaque modif
        console.log('componentWillUpdate');
    },

    componentDidUpdate() {
        // apres chaque modif
        console.log('componentDidUpdate');
    },
});

module.exports = ToDoComponent;