import React,{useRef, useState} from "react";
import styles from './RightNavigation.module.css';
const RightNavigation = (props) =>{
    const inputTitleRef = useRef("");
    const textAreaDescriptionRef = useRef();
    const [blogPost, setBlogPost] = useState([]);
    const postClickHandler = (event) =>{
        event.preventDefault();
        const postDetails = {
            title: inputTitleRef.current.value,
            description: textAreaDescriptionRef.current.value
        }
        setBlogPost(postDetails)
        props.onGetPostHandler(postDetails)
        inputTitleRef.current.value = "";
        textAreaDescriptionRef.current.value = "";
        
    }
    return(
        <>
            <div className={styles['container']}>
                <div className={styles['inner-container']}>
                    <label><strong>Title</strong></label>
                    <input ref={inputTitleRef} placeholder="title" />
                    <label><strong>Description</strong></label>
                    <textarea ref={textAreaDescriptionRef} placeholder="description" />
                    <button type="button" onClick={postClickHandler}>Post</button>
                </div>
            </div>
        </>
    );
}
export default RightNavigation;