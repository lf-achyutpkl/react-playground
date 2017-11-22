import React, { Component } from 'react';
// import './style.css';
import style from './style';

class Header extends Component{
    constructor(props){
        super(props);

        console.log(style)
    }
    render(){
        return(
            <h1 style={style.title}>{this.props.title}</h1>
        );
    }
}

export default Header;
