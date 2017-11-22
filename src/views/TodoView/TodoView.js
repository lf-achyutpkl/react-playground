import React, {Component} from 'react';
import update from 'immutability-helper';

import Header from '../../components/Header';
import TodoList from '../../components/TodoList';
import SeachRow from '../../components/SearchRow';

class View extends Component{

    constructor(){
        super();
        
        /*
        {
            id: 1,
            todo: 'Meeting',
            status: 'in progress'
        }
        */

        this.state = {
            error: false,
            todoText: '',
            todos: [
                {
                    id: 1,
                    text: 'First todo',
                    status: 'Done'
                }
            ]
        }
    }

    componentDidMount(){

        let localTodo = JSON.parse(localStorage.getItem('todos'));
        if(localTodo !== null){
            this.setState({todos: localTodo});
        }

        // localTodo && this.setState({todos: localTodo})
        


        /* Immutable sikeko matra
            console.log(this.state.person.name.firstName);
            // this.state.person.name.firstName = 'Shyam';
            // let newPerson = Object.assign({}, this.state.person);
            let newPerson = {...this.state.person, name: {...this.state.person.name, firstName: 'Hari'}};
            this.setState({person: newPerson});
        */
    }

    render(){
        return(
            <div className='header'>
                <Header title='My To Do List'/> 
                <SeachRow error = {this.state.error} todoText={this.state.todoText} setTodoText = {this.setTodoText} addTodo={this.addTodo}/> 
                <TodoList todos={this.state.todos} onClick = {this.changeStatus}/>         
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
        if(this.state.todoText === ''){
            this.setState({error: true});
            return;
        }
        let length = this.state.todos.length + 1;
        let todo = {id: length, text: this.state.todoText, status: 'Not Done'};
        let todos = this.state.todos.concat([todo]);

        //this.setState({updater, [callback]})

        this.setState({todos, todoText: ''}, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
            console.log('state state ko bhitra', this.state.todos);
        });     // clear text box

        console.log('state state ko tala', this.state.todos);
    }

    changeStatus = (id) => { //3
        let selectedTodoIndex = this.state.todos.findIndex(todo => todo.id === id) //5
        
        let updatedTodos = update(this.state.todos, {
            [selectedTodoIndex]: {
                status: {$set: 'Done'}
            }
        })

        this.setState({todos: updatedTodos})
    }
}

export default View;
