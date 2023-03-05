import React, { useState } from 'react'
import PostPreview from './PostPreview'

const Content = () => {
  const [posts, setPosts] = useState([
    {id: 1, name: 'Post1', content: 'Este es el post1'},
    {id: 2, name: 'Post2', content: 'Este es el post1'},
    {id: 3, name: 'Post3', content: 'Este es el post3'}
  ])
  
  return (
    <div>
      {posts.map(post => <PostPreview key={post.id} post={post}/>)}
    </div>
  )
}

export default Content