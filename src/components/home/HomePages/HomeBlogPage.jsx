import React from "react";
import './blog.css';
import { useBlog } from "../../Contexts/BlogContext";
const HomeBlogPage=()=>{
    const blog=useBlog();
    const Blog=blog.slice(0,3)
    return(
        <div className="HomeBlogPage">
                <h1>Our blogs</h1>
                <div className="homeBlogContainer">
                    {
                        Blog.map((item)=>{
                            return(
                                <div className="homeBlog">
                                    <img src={item.blogImage} alt="home-blog-image" />
                                    <p>{item.blogTitle}</p>
                                    <p>{item.blogDescription}</p>
                                    <p className="para-blog">Read More ...</p >
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default HomeBlogPage;