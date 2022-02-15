import React, {Component} from "react";
import DisplayMessage from "./components/display-message";
import LoginPage from "./components/login";

import "./css/style.css";

class App extends Component{
  render(){
    return(
      <div>
        {/* <DisplayMessage></DisplayMessage> */}
        <LoginPage></LoginPage>
      </div>
    )
  }
}

export default App;