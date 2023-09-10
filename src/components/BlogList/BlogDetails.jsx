import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Blogs as blogs } from "../../json/data"
import "./BlogDetails.scss"

const BlogDetails = () => {
  const { blogId } = useParams()
  const navigate = useNavigate()
  const selectedBlog = blogs.find(
    (blog) => `${blog.title}-${blog.category}` === blogId
  )

  const findNextBlogInCategory = () => {
    const currentIndex = blogs.findIndex(
      (blog) => `${blog.title}-${blog.category}` === blogId
    )

    if (currentIndex !== -1) {
      let nextIndex = currentIndex + 1
      while (nextIndex !== currentIndex) {
        if (nextIndex >= blogs.length) {
          nextIndex = 0
        }

        if (blogs[nextIndex].category === selectedBlog.category) {
          return blogs[nextIndex]
        }

        nextIndex++
      }
    }

    return null
  }

  const nextBlog = findNextBlogInCategory()

  const navigateToNextBlog = () => {
    if (nextBlog) {
      navigate(`/bloglist/${nextBlog.title}-${nextBlog.category}`)
    }
  }

  return (
    <>
      <div className='blogdetails'>
        <div className='blogdetails_container'>
          <p className='breadcrumbs subheading'>{`Blog • ${selectedBlog.category}`}</p>
          <h1 className='title'>{selectedBlog.title}</h1>
          <p className='paragraphs date'>{selectedBlog.date}</p>
          <div className='blog_image'>
            <img src={selectedBlog.photo} alt={selectedBlog.title} />
          </div>
          <p className='subheading blog-text'>{selectedBlog.text}</p>
        </div>
      </div>
      <div className='bottomcard'>
        <div className='bottomcard_container'>
          <p className='subheading'>Read Next</p>
          <h2 className='h2Regular'>{nextBlog.title}</h2>
          <button
            type='button'
            className='btn-nobg'
            onClick={navigateToNextBlog}
          >
            Go to article <i className='fa-solid fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default BlogDetails
