import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class ContactPage extends Component{
  
  render(){
    return(
      <div>
        <h2>This is a Contact Page</h2>
        <NavLink to="/">Go to Home Page Again</NavLink>
      </div>
    )
  }
}

export default ContactPage;