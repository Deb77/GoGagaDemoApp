import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import Post from '../Posts/Posts';
import styles from './PostContainer.module.css';
const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const fetchData = async() => {
            await Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPosts(res.data))
        }
        fetchData();
    })
    return (
        <div className={styles.container}>
            {posts.map((post,k) => (
                <Post key={k} post={post}/>
            ))}
        </div>
    )
}

export default Posts;