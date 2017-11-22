import React from 'react';
import './style.css';

const InputBox = (props) => (
            <div className='custom-input'>
                <input type='text' 
                    value = {props.todoText}
                    onChange={(e) => props.onChange(e.target.value)} 
                    placeholder={props.placeholder} />
                {props.error && <span className="error-msg">Input box can't be empty</span> }
            </div>
        );

export default InputBox;
