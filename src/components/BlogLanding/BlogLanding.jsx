import Link from "next/link";
import { Blogs as blogs } from "../../json/data";
import BlogLandingCard from "./BlogLandingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import "./BlogLanding.scss";

const BlogLanding = () => {
  const blogsCardComponent = blogs.slice(0, 4).map((blog, index) => (
    <BlogLandingCard
      key={index}
      title={blog.title}
      photo={blog.photo}
      text={blog.text}
      category={blog.category}
      id={`${blog.title}-${blog.category}`}
    />
  ));

  return (
    <div className="bloglanding">
      <div className="bloglanding_container">
        <h2 className="h2Regular">Blog</h2>
        <div className="bloglanding_container_cards">{blogsCardComponent}</div>
        <Link href="/bloglist" className="btn-bg">
          View all posts <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default BlogLanding;
