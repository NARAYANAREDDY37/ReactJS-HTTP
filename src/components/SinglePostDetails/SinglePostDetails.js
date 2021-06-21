import axios from 'axios';
import React, { Component } from 'react';

class SinglePostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
    };
  }
}
componentDidMount() {
  axios
    .get(
      `https://react-web-dev-43cd3-default-rtdb.firebaseio.com/posts/${this.props.id}`
    )
    .then((response) => {
      this.setState({
        post: { ...response.data, id: this.props.id },
      });
    });
  }


  render() {
    return (
      <div className="my-2 p-3 border shadow border-gray-400">
        <div>Id: {this.state.post.id} </div>
        <div>Title: {this.state.post.name} </div>
        <div>Description: {this.state.post.description} </div>
      </div>
    );
  }



export default SinglePostDetails;
