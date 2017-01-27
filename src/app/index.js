import React from 'react';
import ReactDOM from 'react-dom';
import{Router, Route, browserHistory} from 'react-router';

// Pages
import About from './components/About';
import ToDoComponent from './components/ToDoComponent';

// Routing
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

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
