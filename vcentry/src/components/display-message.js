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
        <button  class="btn btn-primary" onClick={() => this.showMessage()}>Show Message</button>
        <button  class="btn btn-danger" onClick={() => this.hideMessage()}>Hide Message</button>

        { this.state.isMessageVisible &&  <div>
            <h2>The username is {this.state.userName}</h2>
            <h2>The password is {this.state.password}</h2>
          </div>}

       { this.state.isMessageVisible ?  
          <div>
            <h2>Image from file system</h2>
            <img src={require("../images/shinchu.jpg")} className="img"/>
          </div>
          :
          <div>
            <h2>Image from Online</h2>
            <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop" className="img"/>
          </div>}


          <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayMessage;