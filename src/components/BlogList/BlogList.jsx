'use client'
import { useState, useEffect } from "react"
import BlogLandingCard from "../BlogLanding/BlogLandingCard"
import "./BlogList.scss"

const BlogList = ({ choices, blogs }) => {
  const [selectedChoice, setSelectedChoice] = useState(choices[0].title)
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 12
  const [paginatedBlogs, setPaginatedBlogs] = useState([])
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)

  const filterBlogsByCategory = (category) => {
    if (category === "All posts") {
      setFilteredBlogs(blogs)
    } else {
      const filtered = blogs.filter((blog) => blog.category === category)
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
              <a
                onClick={() => filterBlogsByCategory(choice.title)}
                className={selectedChoice === choice.title ? "selected" : ""}
              >
                {choice.title}
              </a>
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
