import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, author, date, image, children }) => {
    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <div className="meta">
                <span>Author: {author}</span>
                <span>Date: {date}</span>
            </div>
            <img src={image} alt="Descriptive" />
            <p>{children}</p>
            <hr />
        </div>
    );
}

export default BlogPost;