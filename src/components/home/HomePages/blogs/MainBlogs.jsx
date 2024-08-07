import React from "react";
import './mainBlog.css';
import { useBlog } from "../../../Contexts/BlogContext";
const MainBlogs=()=>{
    const Blogs=useBlog();
    return(
        <div className="MainBlogs">
            {
                Blogs.map((item)=>{
                    return(
                        <div className="blogContainer">
                            <img src={item.blogImage} alt="" />
                            <div className="content">
                                <h1>{item.blogTitle}</h1>
                                <p>{item.blogContext}</p>
                                <p className="author">By : {item.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MainBlogs;