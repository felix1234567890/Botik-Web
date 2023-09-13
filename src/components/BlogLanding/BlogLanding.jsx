import React from "react";
import { NavLink } from "react-router-dom";
import { Blogs } from "../../json/data";
import BlogLandingCard from "./BlogLandingCard";
import "./BlogLanding.scss";

const BlogLanding = () => {
  const blogsCardComponent = Blogs.slice(0, 4).map((blog, index) => (
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
        <NavLink to="/bloglist" className="btn-bg">
          View all posts <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default BlogLanding;
