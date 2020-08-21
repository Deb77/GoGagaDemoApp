import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Post from '../components/PostContainer/PostContainer'
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar title={"Blog Posts"}/>
            <Post/>
            <Footer/>
        </div>
    )
}

export default Home;
