import React, {Component} from 'react';
import './style.css';

class ToDoLists extends Component{

    render(){
        return(       
           <ul id='toDo' className='todolists'> 
            { this.props.todos.map((todo, index) => <li key={index}>{todo}</li>)}
           </ul>
        );
    }
}

export default ToDoLists;
