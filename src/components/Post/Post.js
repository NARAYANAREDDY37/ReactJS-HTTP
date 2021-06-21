import React from 'react';

function Post(props) {
	return (
		<a
			href='#'
			className='mx-2 p-2 border shadow border-gray-400'
			onClick={props.postClicked}
		>
			<div>Id: {props.post.id}</div>
			<div>Title: {props.post.name}</div>
			<div>Description: {props.post.description}</div>
		</a>
	);
}

export default Post;
