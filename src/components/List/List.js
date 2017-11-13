import React, {Component} from 'react';

class List extends Component{

  render(){
    return(
      this.props.list.map((item,index) => <div key={index}>{item}</div>)
    );
  }
}

export default List;
