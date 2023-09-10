import React from "react"
import { useNavigate } from "react-router-dom"

const BlogLandingCard = ({ photo, title, category, text, id }) => {
  const navigate = useNavigate()
  
  function handleBlogClick(blogId) {
    navigate(`/bloglist/${blogId}`)
  }

  return (
    <div className='blogCard' onClick={() => handleBlogClick(id)}>
      <div className='blogCard_icon'>
        <img src={photo} alt='User Icon' />
      </div>
      <div className='blogCard_details'>
        <p className='blogCard_details_title'>{title}</p>
        <p className='category'>{category}</p>
        <p className='blogCard_details_text'>{text}</p>
      </div>
    </div>
  )
}

export default BlogLandingCard
