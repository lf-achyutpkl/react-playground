import React, {Component} from 'react';
import './style.css';

class InputBox extends Component{
    render(){
        return(
            <div className='custom-input'>
                <input type='text' 
                    value = {this.props.todoText}
                    onChange={(e) => this.props.onChange(e.target.value)} 
                    placeholder={this.props.placeholder} />
                {this.props.error && <span className="error-msg">Input box can't be empty</span> }
            </div>
        );
    }
}

export default InputBox;
