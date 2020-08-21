import React from 'react'
import styles from './Navbar.module.css';
import {Search, Aperture} from 'react-feather';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
           <div className={styles.container}>
            <li className={styles.title}><Aperture/><p>DeBlog</p></li>
            <li className={styles.icon}><Search/><p>Search</p></li>  
            </div> 
            <p className={styles.header}>Blog Posts</p>
        </div>
        
    )
}

export default Navbar;
