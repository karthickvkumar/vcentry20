import React, {Component} from "react";

class DisplayMessage extends Component {

  display(){
    let message = "Welcome to Display Message method";
    console.log(message);
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