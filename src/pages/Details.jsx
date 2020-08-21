import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Reviews from '../components/Reviews/Reviews';

const Details = (props) => {
    const [post,setPost] = useState({})
    useEffect(() => {
     setPost(props.location.state.post); 
    },[props.location.state.post])
    
    return (
        <div>
            <Navbar title={'Reviews'}/>
            {post && (
                <Reviews post={post}/>
            )}
        </div>
    )
}

export default Details
