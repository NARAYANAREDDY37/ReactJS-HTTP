import axios from 'axios';
import React, { Component } from 'react';
import Post from '../Post/Post';
// import SinglePostDetails from '../SinglePostDetails/SinglePostDetails.js';
import FunctionalSinglePostDetails from '../FunctionalSinglePostDetails/FunctionalSinglePostDetails';
import AddPost from '../AddPost/AddPost';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPostId: null,
      isAddPost: false,
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

  onAddPostHandler = () => {
    this.setState({
      isAddPost: true,
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
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl">Posts Data</h1>
              <a
                href="#"
                className="bg-blue-600 px-2 py-1 my-4 text-white "
                onClick={this.onAddPostHandler}
              >
                Create Post
              </a>
            </div>
            <div className="flex mx-2 my-2">{posts}</div>
          </div>
          {this.state.selectedPostId && (
            <div className="w-2/4">
              <h1 className="font-bold text-2xl">Post Details</h1>
              <FunctionalSinglePostDetails id={this.state.selectedPostId} />
            </div>
          )}
        </div>
        {this.state.isAddPost && (
          <div className="my-3">
            <AddPost />
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
