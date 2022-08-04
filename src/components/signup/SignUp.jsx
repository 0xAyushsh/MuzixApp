import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './SignUp.css'


export default class SignUp extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: this.firstname,
      lastName: this.lastname,
      id: this.email,
      password: this.password,
    };

    const confirmpass = document.getElementById("confirmpass").value;
    if(confirmpass == data.password){
      axios.post('http://localhost:3333/Users',data).then(res =>{
        alert("Signup successful");
        window.location.pathname = "/signin";
    }).catch(e=>{
        console.log(data)
    })
    }else{
      alert("Password do not match");
    }
  };

  render() {
    return (

      <div className="signup-body">
      <div className="signup-body">
      <div className="outer">
        <div className="inner mt-5">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => (this.firstname = e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => (this.lastname = e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => (this.email = e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => (this.password = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                id="confirmpass"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mt-4">
              Sign Up
            </button>
            <p className="forgot-password text-right mt-4">
              Already registered ? <a href="/signin">Sign In</a>
            </p>
          </form>
        </div>
        </div>
      </div>
      </div>
    )
  }
}
