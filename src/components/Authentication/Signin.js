import axios from "axios";
import React, { useState } from "react";
import { useHistory , Link} from "react-router-dom";
import './Signin.css'

function Signin() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useHistory();

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    }else{
      let email = userData.username;
      let password = userData.password
      let length = 0;
      axios.get(`http://localhost:3333/Users?id=${email}&password=${password}`)
      .then(res => {
        if(res.data.length > 0){
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("username",email);
          window.location.pathname = "/";
        }else{
          setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
        }
      }
      )}
  };

  return (
    <div className="signin-body">
    <div className=" outer text-center mt-5">
      <div className=" inner text-center mt-5">
      <h3>Sign In</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="form-group mt-4">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-group mt-3">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )}
      </form>
      <div className="mt-5"><a href="/signup">Sign up</a></div>
      </div>
    </div>
    </div>
  );
}

export default Signin;
