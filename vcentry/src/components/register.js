import React, { Component } from 'react';

class RegisterPage extends Component {

  onHandleInput = (event) => {
    console.log(event.target.value)
  } 

  render() {
    return (
      <div>
        <h1>Welcome to Register Page</h1>
        <div className="block-space">
          <label className="label-message">Please enter your First Name :</label>
          <input className="input-box" type="text" placeholder="Enter your First Name.." onChange={this.onHandleInput} name=""/>
        </div>
        <div className="block-space">
          <label className="label-message">Please enter your Last Name :</label>
          <input className="input-box" type="text" placeholder="Enter your Last Name.." onChange={this.onHandleInput} name=""/>
        </div>
        <div className="block-space">
          <label className="label-message">Please enter your Email ID :</label>
          <input className="input-box" type="text" placeholder="Enter your Email ID.." onChange={this.onHandleInput} name=""/>
        </div>
        <div className="block-space">
          <label className="label-message">Please enter your Password :</label>
          <input className="input-box" type="password" placeholder="Enter your Password.." onChange={this.onHandleInput} name=""/>
        </div>
        <div className="block-space">
          <label className="label-message">Select your DOB :</label>
          <input className="input-box" type="date" onChange={this.onHandleInput} name=""/>
        </div>
        <div className="block-space">
          <label className="label-message">Select your Gender :</label>
          <input type="radio" onChange={this.onHandleInput} name="gender"/>Male
          <input type="radio" onChange={this.onHandleInput} name="gender"/>Female
          <input type="radio" onChange={this.onHandleInput} name="gender"/>Others
        </div>
        <div className="block-space">
          <label className="label-message">Select your Hobbies :</label>
          <input type="checkbox" onChange={this.onHandleInput} name=""/>Cricket
          <input type="checkbox" onChange={this.onHandleInput} name=""/>Football
          <input type="checkbox" onChange={this.onHandleInput} name=""/>Chess
          <input type="checkbox" onChange={this.onHandleInput} name=""/>Tennis
          <input type="checkbox" onChange={this.onHandleInput} name=""/>Hockey
        </div>
        <div className="block-space">
          <label className="label-message">Please Enter your Address :</label>
          <textarea className="input-box address" placeholder='Enter your address..' onChange={this.onHandleInput}></textarea>
        </div>
        <div className="block-space">
          <label className="label-message">Select your City :</label>
          <select className="input-box" onChange={this.onHandleInput}>
            <option>Please select any City</option>
            <option>Chennai</option>
            <option>Trichy</option>
            <option>Madurai</option>
            <option>Erode</option>
          </select>
        </div>
        <button className='button'>Create Account</button>
      </div>
    );
  }
}

export default RegisterPage;