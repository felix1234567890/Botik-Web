"use client"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { Blogs as blogs } from "../../../json/data"
import "./BlogDetails.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const BlogDetails = () => {
  const router = useRouter()
  let { slug } = useParams()
  slug = decodeURIComponent(slug)
  const selectedBlog = blogs.find(
    (blog) => `${blog.title}-${blog.category}` === slug
  )

  const findNextBlogInCategory = () => {
    const currentIndex = blogs.findIndex(
      (blog) => `${blog.title}-${blog.category}` === slug
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
      router.push(`/blogs/${nextBlog.title}-${nextBlog.category}`)
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
            <Image height={569} width={853} src={selectedBlog.photo} alt={selectedBlog.title} />
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
            Go to article <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  )
}

export default BlogDetails
