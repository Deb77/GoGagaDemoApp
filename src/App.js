import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/PostContainer/PostContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;
