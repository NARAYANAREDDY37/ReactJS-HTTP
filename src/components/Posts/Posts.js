import axios from 'axios';
import React, { Component } from 'react';
import Post from '../Post/Post';
import SinglePostDetails from '../SinglePostDetails/SinglePostDetails.js';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPostId: null,
    };
  }

  componentDidMount() {
    axios
      .get(`https://react-web-dev-43cd3-default-rtdb.firebaseio.com/posts.json`)
      .then((response) => {
        const posts = [];

        for (let key in response.data) {
          posts.push({ ...response.data[key], id: key });
        }

        this.setState({
          posts: posts,
        });
      });
  }

  onPostClickHandler = (id) => {
    this.setState({
      selectedPostId: id,
    });
  };
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          post={post}
          postClicked={this.onPostClickHandler.bind(this, post.id)}
        />
      );
    });
    return (
      <div>
        <div className="flex">
          <div className="w-2/4">
            <h1 className="font-bold text-xl">Posts Data</h1>
            <div className="flex mx-2 my-2">{posts}</div>
          </div>
          {this.state.selectedPostId && (
            <div className="w-2/4">
              <h1 className="font-bold text-2xl">Post Details</h1>
              <SinglePostDetails id={this.state.selectedPostId} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Posts;
