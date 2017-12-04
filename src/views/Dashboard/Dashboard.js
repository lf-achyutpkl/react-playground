import React, {Component} from 'react';
import {Link} from 'react-router';

import {get, post} from '../../utils/httpUtils';

/**
 * Root component for the application.
 */
class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      body: '',
      posts: [],
      users: []
    }
  }

  componentDidMount(){
    // let url = 'https://jsonplaceholder.typicode.com/photos';
    // get(url).then(response => this.setState({posts: response.data}, () => {
    //   console.log('dashboard: ', this.state.posts);
    // }));
    
    let userUrl = 'http://localhost:8000/users.json';
    get(userUrl).then(response => this.setState({users: response.data.users})) 
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => <p key={user.id}>{user.name}</p>)}
      </div>
    );
  }

  renderPost = (post) => {
    return(
      <div key = {post.id} style={{color: 'red'}}>
        {post.title}
        <img src={post.thumbnailUrl}/>
      </div>
    );
  }

  save = () => {
   let url = 'https://jsonplaceholder.typicode.com/posts';
   let postBody = {title: this.state.title, body: this.state.body};
   post(url,postBody).then(data => console.log('la save vayo: ', data)).catch(error => console.log(error))
  }

}

export default Dashboard;
