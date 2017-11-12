import React, {Component} from 'react';

class Form extends Component{

  render(){
    return(
      <div>
        <h1>List of Products</h1>
        <input type="text"/>
        <button>Search</button>
        <div>Biscuits</div>
        <div>Noodles</div>
        <div>Chocolates</div>
      </div>
    );
  }
}

export default Form;
