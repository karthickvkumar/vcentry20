import React, {Component} from "react";
import axios from "axios";

class InboxPage extends Component{

  onLoadUser(){
    let apiURL = "https://reqres.in/api/users?page=2";

    axios.get(apiURL)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render(){
    return(
      <div>
        <h1>This is Inbox Page</h1>
        <button onClick={() => this.onLoadUser()}>Load User Information</button>
      </div>
    )
  }
}

export default InboxPage;