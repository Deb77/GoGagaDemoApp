import React,{useState} from 'react'
import styles from './Pagination.module.css';

const Pagination = ({postsPerPage, totalPosts,paginate}) => {
    const [page,setPage] = useState(1);
    const pageNumbers = [];
    for(let i=1; i <= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
    
    return (
        <div className={styles.top}>
            <div className={styles.container}>
                {pageNumbers.map(number => (
                    <span className={styles.item} key={number}>
                        <a href="#" className={styles.highlight} onClick={() => (paginate(number), setPage(number))}>{number}</a>
                    </span>
                ))}
            </div>    
            <p className={styles.page}>PAGE: {page}</p> 
        </div>

    )
}

export default Pagination;