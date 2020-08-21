import React from 'react'
import styles from './Posts.module.css';
import {ThumbsUp, ThumbsDown} from 'react-feather';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    return (
        <div className={styles.container}>
            <p>{post.title}</p>
            <div className={styles.more}>
                <Link className={styles.btn} to={{pathname:"/details",state:{post:post}}}><span>Details</span></Link>
                <div>
                    <ThumbsUp/>
                    <ThumbsDown/>
                </div>
            </div>
        </div>
    )
}
export default Post;