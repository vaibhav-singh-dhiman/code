import React, { Children } from "react";
import { useContext ,createContext } from "react";
import Blog from "../../assets/Blog";
const BlogContext=createContext(Blog);
const BlogProvider=({children})=>{
    return(
        <BlogContext.Provider value={Blog}>
            {children}
        </BlogContext.Provider>
    )
}
const useBlog=()=>{
    return useContext(BlogContext)
}
export {BlogProvider,useBlog};
