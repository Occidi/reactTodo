var React = require('react');
var ReactDOM = require('react-dom');

//Creating ToDoComponent component
var ToDoComponent = React.createClass({
    getInitialState:function(){
        return{
            todos:['watch','create','fuck'],
            age:77
        }
    },
    render: function(){

        var younger = setTimeout(function(){
            this.setState({
                age:76
            });
        }.bind(this),5000);

        var todos = this.state.todos;
        todos = todos.map(function(item,index){
            return(
                <ToDoItem item={item} key={index}/>
            );
        });

        return(
            <div id="todo-list">
                <p>Epic memes for epic dreams... </p>
                <p>{this.state.age}</p>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }//render
});

//Creating ToDoItem component
var ToDoItem = React.createClass({
    render: function()
    {
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }//render
});

ReactDOM.render(<ToDoComponent/>, document.getElementById('todo-wrapper'));