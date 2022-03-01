import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class HomePage extends Component{
  
  render(){
    return(
      <div>
        <h2>This is a Home Page</h2>
        <NavLink to="/contact">Go to Contact Page</NavLink>
        <br></br>
        <NavLink to="/about">Go to About Page</NavLink>
      </div>
    )
  }
}

export default HomePage;