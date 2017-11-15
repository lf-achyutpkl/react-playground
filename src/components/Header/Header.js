import React, { Component } from 'react';
import './style.css';


class Header extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <h1 className='main-title'>{this.props.title}</h1>
        );
    }
}

export default Header;
