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
      posts: []
    }
  }

  componentDidMount(){
    let url = 'https://jsonplaceholder.typicode.com/photos';
    get(url).then(response => this.setState({posts: response.data}, () => {
      console.log('dashboard: ', this.state.posts);
    }));
    
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => this.renderPost(post))}
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
