import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super()
    
    this.state = {
      counter: 10,
      loading: true,
      posts: [{
        title: 'A'
      }, {
        title: 'B'
      }, {
        title: 'C'
      }]
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({loading: false});
    },2000)
  }

  render(){
    if(this.state.loading){
      return ('Now we are fetching data... spinner');
    }

    // return (
    //   this.state.posts.map(post => <div>{post.title}</div>)
    // )

    return (
      <div className="App">
        <button onClick={this.increaseCounter}>+ Increase</button>
        <span className={this.state.counter === 0 ? 'asdf' : ''}> {this.state.counter} </span>
        <button onClick= {this.descreaseCounter} disabled={this.state.counter === 0} className={this.state.counter === 0 ? 'asdf' : ''}>- Decrease </button> 
      </div>
    );
  }

  /*
        // hiding button logic
        { this.state.counter !== 0 &&
          <button onClick= {this.descreaseCounter}>- Decrease </button>
        }

  */

  //  condition ? true wala statement : false wala statment            =>  ternary operator
  /*  if(condition){
        true wala statement
      } else {
        false wala statement
      }
  }

  */

  increaseCounter = () => {
    this.setState({counter: this.state.counter + 1});

    this.descreaseCounter(); 
  }

  descreaseCounter = () => {
    let counter = this.state.counter - 1;
    if(counter == -1 ){
      return;
    }
    this.setState({counter})
  }

}

export default Counter;
