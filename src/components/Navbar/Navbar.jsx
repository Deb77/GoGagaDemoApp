import React from 'react'
import styles from './Navbar.module.css';
import {Search, Aperture} from 'react-feather';
import { Link } from 'react-router-dom';

const Navbar = ({title}) => {
    return (
        <div className={styles.navbar}>
           <div className={styles.container}>
            <Link to="/" className={styles.title}><Aperture/><p>DeBlog</p></Link>
            <li className={styles.icon}><Search/><p>Search</p></li>  
            </div> 
            <p className={styles.header}>{title}</p>
        </div>
        
    )
}

export default Navbar;
