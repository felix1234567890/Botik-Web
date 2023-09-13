import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import BlogLandingCard from "../BlogLanding/BlogLandingCard"
import "./BlogList.scss"

const BlogList = ({ choices, Blogs }) => {
  const [selectedChoice, setSelectedChoice] = useState(choices[0].title)
  const [filteredBlogs, setFilteredBlogs] = useState(Blogs)
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 12
  const [paginatedBlogs, setPaginatedBlogs] = useState([])
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)

  const filterBlogsByCategory = (category) => {
    if (category === "All posts") {
      setFilteredBlogs(Blogs)
    } else {
      const filtered = Blogs.filter((blog) => blog.category === category)
      setFilteredBlogs(filtered)
    }
    setSelectedChoice(category)
    setCurrentPage(1)
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  // pagination
  useEffect(() => {
    const startIndex = (currentPage - 1) * blogsPerPage
    const endIndex = startIndex + blogsPerPage
    const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex)
    setPaginatedBlogs(paginatedBlogs)
  }, [filteredBlogs, currentPage])

  const blogsCardComponent = paginatedBlogs.map((blog, index) => (
    <BlogLandingCard
      key={index}
      title={blog.title}
      photo={blog.photo}
      text={blog.text}
      category={blog.category}
      id={`${blog.title}-${blog.category}`}    
      />
  ))

  return (
    <div className='bloglist'>
      <div className='bloglist_container'>
        <p className='blog-paragraph subheading'>Blog</p>
        <h1 className='title'>Articles</h1>
        <ul>
          {choices.map((choice, index) => (
            <li key={index}>
              <NavLink
                onClick={() => filterBlogsByCategory(choice.title)}
                className={selectedChoice === choice.title ? "selected" : ""}
              >
                {choice.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='blog_grid'>{blogsCardComponent}</div>
        <div className='pagination'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogList
