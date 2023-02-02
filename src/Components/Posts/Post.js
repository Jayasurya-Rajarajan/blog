import React,{ useEffect, useState, useContext, useRef, useCallback } from "react";
import styles from "./Post.module.css";
import PostList from "./PostList";
import BlogsContext from "../../Store/Blogs/Blogs-Context";
import useHttp from "../../Hooks/use-http";

const RESULT_PER_PAGE = 50;
const Post = (props) => {
  const [blogs, setBlogs] = useState([]);
  const blogCtx = useContext(BlogsContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalRecords, setTotalRecord] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { sendRequest } = useHttp();
  let content = "";
  
  let isLoaded = false;
  const observer = useRef();
  const endBlogRefCallBack = useCallback((node)=>{
    if(blogCtx.blogs.length === 0) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting && hasMore){
        if(!isLoading){
          getPaginatedBlogs();
        }
      }
    })
    if(node) observer.current.observe(node)
  },[blogCtx.blogs])

  const getPaginatedBlogs = () =>{
    setIsLoading(true)
    const params = {
      startNum: pageNumber * RESULT_PER_PAGE,
      endNum: RESULT_PER_PAGE * (pageNumber + 1),
    }
    sendRequest({
      url: `https://localhost:44387/api/Blogs/GetBlogs?startNum=${params.startNum}&endNum=${params.endNum}`,
      data: params
    },getPaginatedBlogsResponse)
  }

  const getPaginatedBlogsResponse = (response) =>{
    if(response.status){
      setPageNumber(prevPageNum => prevPageNum + 1)
      blogCtx.loadBlogs(response.data.blogList);
      setIsLoading(false);
    }
  }

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
      setTotalRecord(response.data.totalBlogs);
      setHasMore(response.data.totalBlogs / 50 > pageNumber)
      blogCtx.addBlogs(response.data.blogList)
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

      const data = {
        name: "test user",
        title: props.newPost.title,
        content: props.newPost.description,
      };
      
      
      fetch("https://localhost:44387/api/Blogs/PostBlog", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
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
      endNum: RESULT_PER_PAGE,
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
          <div className={styles['loader-div']}>
            <span className={styles["loader"]}></span>
          </div>
          }
          {
            isLoading &&
            <div className={styles['loader-div']}>
              <span className={styles["loader"]}></span>
          </div>
          }
        </div>
      </div>
    </>
  );
};
export default Post;
