import React, {Component} from 'react';
import InputBox from '../InputBox';
import SearchBtn from '../Button';
import './style.css';

class SeachRow extends Component{
    render(){
        return(
            <div className='search-row flex-box'>
                <InputBox 
                    error = {this.props.error} 
                    value = {this.props.todoText} 
                    onChange = {this.props.setTodoText} 
                    placeholder='Type your importance' />
                    
                <SearchBtn label='Add to list' onClick={this.props.addTodo}/>
            </div>
        );
    }
}

export default SeachRow;
