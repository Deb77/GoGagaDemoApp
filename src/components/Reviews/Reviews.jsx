import React from 'react'
import styles from './Reviews.module.css';

const Reviews = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.box}>
                    <p className={styles.title}>UserId</p>
                    <p className={styles.text}>{props.post.userId}</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.title}>Id</p>
                    <p className={styles.text}>{props.post.id}</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.title}>Title</p>
                    <p className={styles.text}>{props.post.title}</p>
                </div>
            </div>
            <div className={styles.lower}>
                <div className={styles.box}>
                    <p className={styles.title}>Body</p>
                    <p className={styles.text}>{props.post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews
