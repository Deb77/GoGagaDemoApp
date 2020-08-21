import React from 'react'
import styles from './Posts.module.css';
import {ThumbsUp, ThumbsDown} from 'react-feather';

const Post = ({title}) => {
    return (
        <div className={styles.container}>
            <p>{title}</p>
            <div className={styles.more}>
                <a className={styles.btn} href="#">Details</a>
                <div>
                    <ThumbsUp/>
                    <ThumbsDown/>
                </div>
            </div>
        </div>
    )
}
export default Post;