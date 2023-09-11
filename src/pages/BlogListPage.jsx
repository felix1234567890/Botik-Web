import React from "react"
import BlogList from "../components/BlogList/BlogList"
import BottomCard from "../components/BottomCard/BottomCard"
import { Blogs } from "../json/data"

const BlogListPage = () => {
  return (
    <>
      <BlogList
        choices={[
          { title: "All posts" },
          { title: "News" },
          { title: "Announcements" },
          { title: "Crypto begginers" },
          { title: "Academy" }
        ]}

        Blogs={Blogs}
      />
      <BottomCard/>
    </>
  )
}

export default BlogListPage