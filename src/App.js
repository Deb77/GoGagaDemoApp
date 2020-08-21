import React from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import Search from './pages/Search';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path ="/" component={Home}/>
      <Route exact path="/details" component={Details}/>
      <Route exact path="/search" component={Search}/>
    </Router>
  );
}

export default App;
