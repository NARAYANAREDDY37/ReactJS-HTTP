import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FunctionalSinglePostDetails(props) {
  const [post, setPost] = useState(null);

  //fires on component mounted and component updated
  useEffect(() => {
    if (post && post.id === props.id) {
      return;
    }
    getPostDetails();
  });

  function getPostDetails() {
    axios
      .get(
        `https://react-web-dev-43cd3-default-rtdb.firebaseio.com/posts/${props.id}`
      )
      .then((response) => {
        setPost({ ...response.data, id: props.id });
      });
  }
  if (post) {
    return (
      <div className="my-2 p-3 border shadow border-gray-400">
        <div>Id: {post.id} </div>
        <div>Title: {post.title} </div>
        <div>Description: {post.description} </div>
      </div>
    );
  }
  return null;
}

export default FunctionalSinglePostDetails;
