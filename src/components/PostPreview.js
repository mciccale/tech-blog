import React, { useState } from 'react'

const PostPreview = ({ post }) => {
  return (
    <div>
      <h2>{post.name}</h2>
      <p>{post.content}</p>
    </div>
  )
}

export default PostPreview