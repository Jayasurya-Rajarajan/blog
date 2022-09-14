import React from "react";
import styles from './PostList.module.css';
const PostList = (props) =>{
    console.log("data ",props.posts)
    return(
        <>
            <ul className={styles['list-wrap']}>
                <div className={styles['container']}>
                    <div className={styles['username']}>
                        <h2>{props.posts.name}</h2>
                    </div>
                    <div className={styles['post-container']}>
                        <h4>{props.posts.title}</h4>
                        <div className={styles['post-description']}>
                            <p>{props.posts.description}</p>
                        </div>
                    </div>
                </div>
            </ul>
        </>
    );
}
export default PostList;