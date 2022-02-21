import React, {Component} from "react";

class DisplayMessage extends Component {

  constructor(props){
    super(props);
    this.state = {
      message : "hello",
      userName : "",
      password : "",
      isMessageVisible : true
    }
  }

  display(){
    let text = "Welcome to Display Message method";
    console.log(text);
    this.setState({
      message : text
    });
  }

  //On Change - Type 1
  readInputBox(event){
    console.log(event.target.value)
    this.setState({
      userName : event.target.value
    });
  }

  //On Change - Type 2 (Property method)
  readInputPropertyMethod = (event) => {
    console.log(event.target.value)
    this.setState({
      password : event.target.value
    });
  }

  onLogin(){
    let result = {
      username : this.state.userName,
      password : this.state.password
    };

    console.log(result)
  }

  showMessage(){
    this.setState({
      isMessageVisible : true
    })
  }

  hideMessage(){
    this.setState({
      isMessageVisible : false
    })
  }

  render(){
    return(
      <div>
        <h1>Hi, this is display message</h1>
        <h2>{this.state.message}</h2>

        <button onClick={() => this.display() }>Print Message</button>
        <br></br>
        <label>Enter your UserName :</label>
        {/* on Change - Type 1 */}
        <input className="inputBox" type="text" placeholder="Enter you username.." 
        onChange={this.readInputBox.bind(this)}/>
        <br></br>
        <label>Enter your Password :</label>
        {/* on Change - Type 2 */}
        <input className="inputBox" type="password" placeholder="Enter your Password.." onChange={this.readInputPropertyMethod}/>
        <br></br>
        <button onClick={() => this.onLogin()}>LOGIN</button>

        <br></br>
        <button onClick={() => this.showMessage()}>Show Message</button>
        <button onClick={() => this.hideMessage()}>Hide Message</button>

        { this.state.isMessageVisible &&  <div>
            <h2>The username is {this.state.userName}</h2>
            <h2>The password is {this.state.password}</h2>
          </div>}
        
      </div>
    )
  }
}

export default DisplayMessage;