'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const BlogLandingCard = ({ photo, title, category, text, id }) => {
  const router = useRouter()
  
  function handleBlogClick(blogId) {
    router.push(`/bloglist/${blogId}`)
  }

  return (
    <div className='blogCard' onClick={() => handleBlogClick(id)}>
      <div className='blogCard_icon'>
        <Image width={146} height={146} src={photo} alt='User Icon' />
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
