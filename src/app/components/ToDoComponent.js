import React from 'react';
import './css/index.scss';
import {Link} from 'react-router';
import {loadTodos, createTodo, destroyTodo} from '../lib/todoService';
// Modules
import ToDoItem from './ToDo/TodoItem';
import AddItem from './ToDo/AddItem';


// Creating ToDoComponent component
let ToDoComponent = React.createClass({
    getInitialState: () => {
        return{
            todos: [
                /* {id: 1, name: 'test1', type: 'feu'},
                {id: 2, name: 'test2', type: 'air'},
                {id: 3, name: 'test3', type: 'feu'},*/
            ],
        };
    },

    onDelete(item) {
        let updatedTodos = this.state.todos.filter(function(val) {
            return item !== val;
        });
        this.setState({
            todos: updatedTodos,
        });
        let id = item.id;
        destroyTodo(id)
            .then(() => this.showTimedMessage('Todo Removed'));
    },
    onAdd(item) {
        let updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos,
        });
        createTodo(item)
            .then(() => this.showTimedMessage('Todo ajouté'));
    },
    showTimedMessage(msg) {
        this.setState({message: msg});
        setTimeout(() => this.setState({message: ''}), 2500);
    },

    render() {
        let todos = this.state.todos;
        // si objet add Object.keys()

        // parcours l'array todos avec .map
        // et return un ToDoItem pour chaque item
        /* todos = todos.map(function(item, index) {
            return(
                <ToDoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));*/

        todos = todos.map(function(item, index) {
            return(
                <ToDoItem item={item} key={index} {...item}
                onDelete={this.onDelete}/>
            );
        }.bind(this));

        return(
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                {this.state.message && <span className='success'>{this.state.message}</span>}
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
        /* this.setState({
            todos: ['waitingforData'],
        });*/
        console.log('componentWillMount');
    },

    componentDidMount() {
        console.log('componentDidMount');
        console.log('loaded from db');
        // any grabbing of external data
       /* setTimeout(() => {
            this.setState({
                todos: ['externalData', 'externalData2'],
            });
        }, 5000);*/
        loadTodos()
            .then((todos) => this.setState({todos}));
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
