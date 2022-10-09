import React,{ useEffect, useState, useContext } from "react";
import styles from "./Post.module.css";
import PostList from "./PostList";
import BlogsContext from "../../Store/Blogs/Blogs-Context";
let DUMMY_DATA = [
  {
    name: "jayasurya",
    title: "first post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "surya",
    title: "second post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "mukesh",
    title: "third post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "gunalan",
    title: "fourth post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "yasar",
    title: "fifth post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "niyas",
    title: "sixth post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "elakkiyan",
    title: "seventh post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "vishnu",
    title: "eight post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const Post = (props) => {
  const [blogs, setBlogs] = useState([]);
  const blogCtx = useContext(BlogsContext);
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
          
          return;
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      
      DUMMY_DATA = [post, ...DUMMY_DATA];
    }
  }
  useEffect(()=>{
    fetch('https://localhost:44387/api/Blogs/GetBlogs',{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response)=>response.json())
    .then((data)=>{ 
      console.log("blogs ",data.blogs)
      blogCtx.addBlogs(data.blogs)
    })
    .catch((error)=>{
      console.log("error ",error)
    })
  },[])
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["post-header"]}>
          <h1>Posts</h1>
        </div>
        <div className={styles["post-content"]}>
          {blogCtx.blogs.map((item, index) => (
            <PostList key={index} id={item.Id} posts={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Post;
