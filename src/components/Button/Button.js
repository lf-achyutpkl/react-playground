import React, {Component} from 'react';
import './style.css';

class SearchBtn extends Component{

    render(){
        return(
            <button onClick={this.props.onClick}>{this.props.label}</button>
        );
    }
}

export default SearchBtn;
