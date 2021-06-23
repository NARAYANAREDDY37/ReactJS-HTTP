import React from 'react';

function Post(props) {
  return (
    <a
      href="#"
      className="mx-2 my-2 p-2 border shadow border-gray-400 inline-block flex-1"
      onClick={props.postClicked}
    >
      <div>Id: {props.post.id}</div>
      <div>Title: {props.post.title}</div>
      <div>Description: {props.post.description}</div>
      <div className="text-right py-1">
        <button
          onClick={props.postDeleted}
          className="bg-red-500 text-white px-3 py-1"
        >
          Delete Post
        </button>
      </div>
    </a>
  );
}

export default Post;
