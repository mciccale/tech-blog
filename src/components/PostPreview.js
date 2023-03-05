import React from 'react'

const PostPreview = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </div>
  )
}

export default PostPreview
