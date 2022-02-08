import React, {Component} from "react";

import "./css/style.css";

class App extends Component{
  render(){
    return(
      <div>
        <h1 className="heading">Welcome to React App</h1>
        <h1 className="sub-heading">This is message is comming from App js</h1>
      </div>
    )
  }
}

export default App;