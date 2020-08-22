import React,{useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Posts from '../components/PostContainer/PostContainer';
import Footer from '../components/Footer/Footer';

const Search = () => {
    const [text,setText] = useState("");
    return (
        <div>
            <Navbar title={"Search"}/>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <input style={{margin:'30px 5%',
                padding: '10px',
                width:'300px', 
                fontSize:'1.1em',
                border:'none',
                boxShadow:'0 0 3px #212121',
                borderRadius:'5px'}}
                type="text" 
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}/>
            </div>
            
            <Posts query={text}/>
            <Footer/>
        </div>
    )
}

export default Search;
