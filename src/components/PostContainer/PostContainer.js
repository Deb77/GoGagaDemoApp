import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import Post from '../Posts/Posts';
import styles from './PostContainer.module.css';

const Posts = ({query}) => {
    const [name,setName] = useState(false)
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const fetchData = async() => {
            await Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                setPosts(res.data)
            })
        }
        fetchData();
        if(query === undefined){
            setName(false)
        }
        else{
            setName(true)
        }
    },[query])

    return (
        <div className={styles.container}>
            {posts&&name?(posts.filter(post =>(post.body.includes(query)||post.title.includes(query))).map((filterpost,k) => (
                <Post key={k} post={filterpost}/>
            ))):
            (posts.map((post,k) => (
                <Post key={k} post={post}/>
            )))}
        </div>
    )
}

export default Posts;