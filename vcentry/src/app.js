import React, {Component} from "react";
import DisplayMessage from "./components/display-message";

import "./css/style.css";

class App extends Component{
  render(){
    return(
      <div>
        <DisplayMessage></DisplayMessage>
      </div>
    )
  }
}

export default App;