import React from "react";

const BlogLandingCard = ({ photo, title, category, text }) => {
  return (
    <div className="blogCard">
      <div className="blogCard_icon">
        <img src={photo} alt="User Icon" />
      </div>
      <div className="blogCard_details">
        <p className="blogCard_details_title">{title}</p>
        <p className="category">{category}</p>
        <p className="blogCard_details_text">{text}</p>
      </div>
    </div>
  );
};

export default BlogLandingCard;
