import React, {Component} from "react";

import "../css/login.css";

class LoginPage extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : ''
    }
  }

  onHandleInput = (event) => {
    // console.log(event.target.name, event.target.value)
    if(event.target.name == "User Name"){
      this.setState({
        username : event.target.value
      })
    }
    else if(event.target.name == "Password"){
      this.setState({
        password : event.target.value
      })
    }
  }

  onLogin(){
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <h1>Welcome, Login Page</h1>
        <div className="block-space">
          <label className="label-message">Please enter your Username :</label>
          <input className="input-box" type="text" placeholder="Enter your Username.." onChange={this.onHandleInput} name="User Name"/>
        </div>
        <div className="block-space">
          <label className="label-message">Please enter your Password :</label>
          <input className="input-box" type="password" placeholder="Enter your Password.." onChange={this.onHandleInput} name="Password"/>
        </div>
        <button className="button" onClick={() => this.onLogin()}>Login</button>
      </div>
    )
  }
}

export default LoginPage;