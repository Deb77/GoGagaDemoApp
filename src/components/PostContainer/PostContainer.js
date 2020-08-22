import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import Post from '../Posts/Posts';
import styles from './PostContainer.module.css';
import Pagination from '../Pagination/Pagination';

const Posts = ({query}) => {
    const [name,setName] = useState(false)
    const [posts,setPosts] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage] = useState(12);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
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
        <div>
           <div className={styles.container}>
            {posts&&name?(posts.filter(post =>(post.body.includes(query)||post.title.includes(query))).map((filterpost,k) => (
                <Post key={k} post={filterpost}/>
            ))):
            (currentPosts.map((post,k) => (
                <Post key={k} post={post}/>
            )))}
            </div>
            {currentPosts?(<Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={posts.length}
            paginate={paginate}
            /> ):null}
        </div>
        
        
    )
}

export default Posts;