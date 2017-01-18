var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var ToDoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Test</h1>
                <p>React</p>
            </div>
        );
    }
});

ReactDOM.render(<ToDoComponent/>, document.getElementById('todo-wrapper'));