import React, {Component} from 'react';
import Header from '../../components/Header';
import SeachRow from '../../components/SearchRow';
import TodoList from '../../components/TodoList';

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
            todos: [],
            person: {
                name: {
                    firstName: 'Ram',
                    lastName: 'Shrestha'
                },
                address: 'kathmandu'
            }
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

        //this.setState({updater, [callback]})

        this.setState({todos, todoText: ''}, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
            console.log('state state ko bhitra', this.state.todos);
        });     // clear text box

        console.log('state state ko tala', this.state.todos);
    }
}

export default View;
