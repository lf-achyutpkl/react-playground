import React, {Component} from 'react';
import Header from '../../components/Header';
import SeachRow from '../../components/SearchRow';
import TodoList from '../../components/TodoList';

class View extends Component{

    constructor(){
        super();

        this.state = {
            error: false,
            todoText: '',
            todos: []
        }
    }

    render(){
        return(
            <div className='header'>
                <Header title='My To Do List'/> 
                <SeachRow error = {this.state.error} todoText={this.state.todoText} setTodoText = {this.setTodoText} addTodo={this.addTodo}/> 
                <TodoList todos={this.state.todos}/>         
            </div>
        );
    }

    setTodoText = (text) => {
        if(this.state.error){
            this.setState({error: false});
        }
        
        this.setState({todoText: text});
    }

    addTodo = () => {
        if(this.state.todoText === ''){             // validation, not allowing empty todo
            this.setState({error: true});
            return;
        }
        let todos = this.state.todos.concat([this.state.todoText]);
        this.setState({todos, todoText: ''});       // clear text box
    }
}

export default View;

//Click Functions
