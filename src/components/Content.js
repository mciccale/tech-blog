import React, { useEffect, useState } from 'react'
import PostPreview from './PostPreview'

const Content = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/posts')
      const json = await response.json()
      setPosts(json)
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <div>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Content
