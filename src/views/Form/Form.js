import React, {Component} from 'react';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import List from '../../components/List/List';

class Form extends Component{

  constructor(){
    super();

    this.state = {
      searchText: '',
      products: ['biscuits', 'noodles', 'chocolate', 'chauchau'],
      filteredList: []
    }
  }

  componentDidMount(){
    this.setState({filteredList: this.state.products});
  }

  render(){
    return(
      <div>
        <Header title={'List of products'} />
        <input type="text" onChange={(e) => this.setSearchString(e)}/>
        <Button label='Search...' onClick={this.filter}/>
        <List list={this.state.filteredList}/>
      </div>
    );
  }

  setSearchString = (e) => {
    this.setState({searchText: e.target.value});
  }

  filter = () => {
    let filteredList = this.state.products.filter(product => product.includes(this.state.searchText));
    this.setState({filteredList});
  }
}

export default Form;
