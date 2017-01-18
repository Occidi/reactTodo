var React = require('react');
var ReactDOM = require('react-dom');

//Create Memecomponent
var MemeComponent = React.createClass({
    render: function(){
        return(
            <div>
                <p><strong>Meme:</strong>{this.props.meme.name}</p>
                <p><strong>Meme quality:</strong>{this.props.meme.quality}</p>
                <p><strong>Meme popularity:</strong>{this.props.meme.popularity}</p>
            </div>
        );
    }
});

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

var myMeme = {name: 'InnerMe', quality: 8, popularity:9};

ReactDOM.render(<MemeComponent mssg="memes" meme={myMeme}/>, document.getElementById('meme-wrapper'));
ReactDOM.render(<ToDoComponent/>, document.getElementById('todo-wrapper'));