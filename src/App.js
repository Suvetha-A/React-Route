
import React from "react";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "./Components/home.js";
import Component1 from "./Components/component1.js";
import Component2 from "./Components/component2.js";
import "./App.css";

function Routerapp (){

  return(
    
    <div>
      <Router>
        
        <nav className="Container" >
          
          <Link className="s1" to="/Home">Home</Link>
          <Link className="s1" to="/Component1" >Component1</Link>
          <Link className="s1" to="/Component2" >Component2</Link>
          
        </nav>
        <p className="Sample">App Component Works</p>
        <Routes>
          <Route path="/Home" element={<Home/> }></Route>
          <Route path="/Component1" element={<Component1/>}></Route>
          <Route path="/Component2" element={<Component2/>}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default Routerapp;



