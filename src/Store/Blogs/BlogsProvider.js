import React,{ useReducer } from "react";
import BlogsContext from "./Blogs-Context";

const defaultBlogsState = {
    blogs: [],
    totalBlogs: 0
}

const blogsReducer = (state, action) =>{
    if(action.type === "ADD"){
        return{
            ...state,
            blogs: action.blog
        }
    }
    return defaultBlogsState;
}

const BlogsProvider = (props) =>{
    const[blogsState, dispatchBlogsAction] = useReducer(blogsReducer, defaultBlogsState);
    const addBlogsHandler = (blog) =>{
        dispatchBlogsAction({
            type: 'ADD',
            blog: blog
        })
    }

    const blogsContext = {
        blogs: blogsState.blogs,
        totalBlogs: blogsState.totalBlogs,
        addBlogs: addBlogsHandler,
        
    }
    return(
        <BlogsContext.Provider value={blogsContext}>
            {props.children}
        </BlogsContext.Provider>
    );
}
export default BlogsProvider;