import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import{Router, Route, browserHistory, Link} from 'react-router';

// Module requires
import ToDoItem from './todoitem';
import AddItem from './addItem';
import About from './about';

let App = React.createClass({
    render: () => {
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={ToDoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    },
});

// Creating ToDoComponent component
let ToDoComponent = React.createClass({
    getInitialState: () => {
        return{
            todos: ['watch', 'create', 'fuck'],
        };
    },
    render: function() {
        let todos = this.state.todos;
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
    // lifecycle functions
    componentWillMount: () => console.log('componentWillMount'),

    componentDidMount: function() {
        console.log('componentDidMount');
        // any grabbing of external data
    },

    componentWillUpdate: () => console.log('componentWillUpdate'),
});

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
