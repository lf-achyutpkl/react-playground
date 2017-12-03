import React, {Component} from 'react';
import update from 'immutability-helper';

import Header from '../../components/Header';
import InputBox from '../../components/InputBox';
import TodoList from '../../components/TodoList';
import SeachRow from '../../components/SearchRow';
import DropDown from '../../components/DropDown';

import {isNotValid} from '../../utils/validationUtils';

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
            ],
            filteredResult: []
        }
    }

    componentDidMount(){

        let localTodo = JSON.parse(localStorage.getItem('todos'));
        if(localTodo !== null){
            this.setState({todos: localTodo, filteredResult: localTodo});
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
                <DropDown options={['All', 'Done', 'Not Done']} abc={this.filterByStatus}/>
                <SeachRow error = {this.state.error} todoText={this.state.todoText} setTodoText = {this.setTodoText} addTodo={this.addTodo}/> 
                <InputBox placeholder='Search' onChange={this.searchTodo}/>
                <TodoList todos={this.state.filteredResult} onClick = {this.changeStatus}/>         
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
        if (isNotValid(this.state.todoText)) {
          this.setState({ error: true });
          return;
        }

        let length = this.state.todos.length + 1;
        let todo = {id: length, text: this.state.todoText, status: 'Not Done'};
        let todos = this.state.todos.concat([todo]);

        //this.setState({updater, [callback]})

        this.setState({todos, todoText: '', filteredResult: todos}, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        });     // clear text box

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

    searchTodo = (queryString) => {
        let searchResult = this.state.todos.filter(todo => todo.text.toLocaleLowerCase().includes(queryString.toLocaleLowerCase()));
        this.setState({filteredResult: searchResult});
    }

    filterByStatus = (status) => { //all, done, not done
        if(status.toLocaleLowerCase()==='all'){
            this.setState({filteredResult:this.state.todos})
            return;
        }
        let searchResult = this.state.todos.filter(todo=>todo.status.toLocaleLowerCase()===status.toLocaleLowerCase());
        this.setState({filteredResult:searchResult});
    }
}

export default View;
