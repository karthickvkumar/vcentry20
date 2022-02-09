import React, {Component} from "react";

class DisplayMessage extends Component {

  display(){
    var message = "Welcome to Display Message method";
    console.log(message);
  }

  render(){
    return(
      <div>
        <h1>Hi, this is display message</h1>
        <button onClick={() => this.display() }>Print Message</button>
      </div>
    )
  }
}

export default DisplayMessage;