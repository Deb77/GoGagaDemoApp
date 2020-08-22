import React from 'react'
import styles from './Posts.module.css';
import {ThumbsUp, ThumbsDown} from 'react-feather';
import {Link} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import {incrementL,incrementD} from '../../actions';

const Post = ({post}) => {
    const dispatch = useDispatch();
    const likes = useSelector(state=>state.likes[post.id-1])
    const dislikes = useSelector(state=>state.dislikes[post.id-1])
    return (
        <div className={styles.container}>
            <p>{post.title}</p>
            <div className={styles.more}>
                <Link className={styles.btn} to={{pathname:"/details",state:{post:post}}}><span>Details</span></Link>
                <div>
                    <span>{likes}</span>
                    <span onClick={() => dispatch(incrementL(post.id))}><ThumbsUp/></span>
                    <span>{dislikes}</span>
                    <span onClick={() => dispatch(incrementD(post.id))}><ThumbsDown/></span>
                </div>
            </div>
        </div>
    )
}
export default Post;