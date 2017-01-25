import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import{Router, Route, browserHistory, Link} from 'react-router';

// Module requires
import ToDoItem from './todoitem';
import AddItem from './addItem';
import About from './about';

let App = React.createClass({
    render() {
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
            todos: ['componentWillMount'],
        });
        console.log('componentWillMount');
    },

    componentDidMount() {
        console.log('componentDidMount');
        // any grabbing of external data
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

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
