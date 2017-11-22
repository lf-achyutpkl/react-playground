import React, {Component} from 'react';
import './style.css';

class ToDoList extends Component{

    render(){
        return(       
           <ul id='toDo' className='todolists'> 
            { this.props.todos && this.props.todos.map(todo => 
                <li 
                    onClick = {() => this.props.onClick(todo.id)}
                    style={{backgroundColor: todo.status === 'Done' && 'red'}} 
                    key={todo.id}>
                        {todo.text}
                </li>)
            }
           </ul>
        );
    }
}

export default ToDoList;
