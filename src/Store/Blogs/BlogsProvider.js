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
    if(action.type === "POST"){
        console.log("post ", state, action)
        return{
            ...state,
            blogs: [action.blog, ...state.blogs]
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
    const postBlogHandler = (blog) =>{
        dispatchBlogsAction({
            type:'POST',
            blog: blog
        })
    }
    const blogsContext = {
        blogs: blogsState.blogs,
        totalBlogs: blogsState.totalBlogs,
        addBlogs: addBlogsHandler,
        postBlog: postBlogHandler,
        
    }
    return(
        <BlogsContext.Provider value={blogsContext}>
            {props.children}
        </BlogsContext.Provider>
    );
}
export default BlogsProvider;