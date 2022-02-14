import React, {Component} from "react";

class DisplayMessage extends Component {

  constructor(props){
    super(props);
    this.state = {
      message : "hello"
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
  }

  //On Change - Type 2 (Property method)
  readInputPropertyMethod = (event) => {
    console.log(event.target.value)
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
      </div>
    )
  }
}

export default DisplayMessage;