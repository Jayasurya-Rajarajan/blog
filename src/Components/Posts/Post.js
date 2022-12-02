import React,{ useEffect, useState, useContext, useRef, useCallback } from "react";
import styles from "./Post.module.css";
import PostList from "./PostList";
import BlogsContext from "../../Store/Blogs/Blogs-Context";
import useHttp from "../../Hooks/use-http";

const Post = (props) => {
  const [blogs, setBlogs] = useState([]);
  const blogCtx = useContext(BlogsContext);
  const [totalRecords, setTotalRecords] = useState();
  const { sendRequest } = useHttp();
  let content = "";
  let isLoaded = false;
  const observer = useRef();
  const endBlogRefCallBack = useCallback((node)=>{
    if(blogCtx.blogs.length === 0) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting){
        console.log('visible')
      }
    })
    if(node) observer.current.observe(node)
  },[blogCtx.blogs])

  if(blogCtx.blogs.length === 0){
    content = <p>Loading...</p>
  }
  else{
    isLoaded = true
    // content = blogCtx.blogs.map((item, index) => (
    //   <PostList key={index} id={item.Id} posts={item} />
    // ))
  }
  const getBlogResponse = (response) =>{
    if(response.status){
      setTotalRecords(response.totalRecords);
      blogCtx.addBlogs(response.data)
    }
    else{
      content = <p style={{ color:'red' }}>Something went wrong</p>
    }
  }
  if (props.newPost.title !== undefined) {
    if (
      props.newPost.title.trim().length !== 0 ||
      props.newPost.description.trim().length !== 0
    ) {
      const post = {
        name: "test user",
        title: props.newPost.title,
        description: props.newPost.description,
      };
      const data = {
        name: "test user",
        title: props.newPost.title,
        content: props.newPost.description,
      };
      console.log("blog ctx", blogCtx)
      
      
      fetch("https://localhost:44387/api/Blogs/PostBlog", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          blogCtx.postBlog(data.data);
          props.clearStateHandler();
          
          return;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  useEffect(()=>{
    const params = {
      startNum: 1,
      endNum: 50
    }
    const options = {
      method: 'GET',
      body: JSON.stringify(params)
    }
    sendRequest({
      url: 'https://localhost:44387/api/Blogs/GetBlogs?startNum=1&endNum=50',
      data: JSON.stringify(params)
    },getBlogResponse)
    // fetch('https://localhost:44387/api/Blogs/GetBlogs?startNum=1&endNum=50'
      
    // ).then((response)=>response.json())
    // .then((data)=>{ 
    //   console.log("blogs ",data.blogs)
    //   blogCtx.addBlogs(data.blogs)
    // })
    // .catch((error)=>{
    //   console.log("error ",error)
    // })
  },[])
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["post-header"]}>
          <h1>Posts</h1>
        </div>
        <div className={styles["post-content"]}>
          {/* {content} */}
          {
            isLoaded ?
            blogCtx.blogs.map((item, index) => {
              if(blogCtx.blogs.length === index + 1){
                 return <div key={index} ref={endBlogRefCallBack}><PostList key={index} id={item.Id} posts={item} /></div>
              }
              else{
                return <div key={index}><PostList key={index} id={item.Id} posts={item} /></div>
              }   
          })
          :
          <p>Loading...</p>
          }
        </div>
      </div>
    </>
  );
};
export default Post;
