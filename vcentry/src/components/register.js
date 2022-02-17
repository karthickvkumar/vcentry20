import React, { Component } from 'react';

class RegisterPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      first_name : "",
      last_name : "",
      email_id : "",
      password: "",
      date_of_birth: "",
      gender: "",
      hobbies: "",
      address : "",
      city : ""
    }
  }

  onHandleInput = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name] : event.target.value      
    })
  } 

  onCreateAccount(){
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Welcome to Register Page</h1>
        <div className="block-space">
          <label className="label-message">Please enter your First Name :</label>
          <input className="input-box" type="text" placeholder="Enter your First Name.." onChange={this.onHandleInput} name="first_name"/>
        </div>
        <div className="block-space">
          <label className="label-message">Please enter your Last Name :</label>
          <input className="input-box" type="text" placeholder="Enter your Last Name.." onChange={this.onHandleInput} name="last_name"/>
        </div>
        <div className="block-space">
          <label className="label-message">Please enter your Email ID :</label>
          <input className="input-box" type="text" placeholder="Enter your Email ID.." onChange={this.onHandleInput} name="email_id"/>
        </div>
        <div className="block-space">
          <label className="label-message">Please enter your Password :</label>
          <input className="input-box" type="password" placeholder="Enter your Password.." onChange={this.onHandleInput} name="password"/>
        </div>
        <div className="block-space">
          <label className="label-message">Select your DOB :</label>
          <input className="input-box" type="date" onChange={this.onHandleInput} name="date_of_birth"/>
        </div>
        <div className="block-space">
          <label className="label-message">Select your Gender :</label>
          <input type="radio" onChange={this.onHandleInput} name="gender" value="Male"/>Male
          <input type="radio" onChange={this.onHandleInput} name="gender" value="Female"/>Female
          <input type="radio" onChange={this.onHandleInput} name="gender" value="Others"/>Others
        </div>
        <div className="block-space">
          <label className="label-message">Select your Hobbies :</label>
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Cricket"/>Cricket
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Football"/>Football
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Chess"/>Chess
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Tennis"/>Tennis
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Hockey"/>Hockey
        </div>
        <div className="block-space">
          <label className="label-message">Please Enter your Address :</label>
          <textarea className="input-box address" placeholder='Enter your address..' onChange={this.onHandleInput} name="address"></textarea>
        </div>
        <div className="block-space">
          <label className="label-message">Select your City :</label>
          <select className="input-box" onChange={this.onHandleInput} name="city">
            <option>Please select any City</option>
            <option>Chennai</option>
            <option>Trichy</option>
            <option>Madurai</option>
            <option>Erode</option>
          </select>
        </div>
        <button className='button' onClick={() => this.onCreateAccount()}>Create Account</button>
      </div>
    );
  }
}

export default RegisterPage;