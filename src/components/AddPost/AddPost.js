import React, { useState } from 'react';
import axios from 'axios';

function AddPost(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function onCreatePost(e) {
    e.preventDefault();
    const postData = {
      title,
      description,
    };

    axios
      .post(
        `https://react-web-dev-43cd3-default-rtdb.firebaseio.com/posts.json`,
        postData
      )
      .then((response) => {
        props.onPostAdded();
      });
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Create Post</h1>
      <form onSubmit={onCreatePost}>
        <div className="mb-3">
          <label className="block">Title: </label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border border-gray-400 w-1/2 p-1"
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <label className="block">Description: </label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="border border-gray-400 w-1/2 p-1"
          >
            Description....
          </textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="bg-purple-500 px-3 py-1 text-white">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
