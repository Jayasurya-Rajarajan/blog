import React from "react";

const BlogsContext = React.createContext({
    blogs: [],
    totalBlogs: 0,
    addBlogs: (blog)=>{ },
    removeBlog: (id) => { }
})
export default BlogsContext;