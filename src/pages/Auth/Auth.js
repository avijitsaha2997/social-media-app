import React from "react";
import "./Auth.css";
function Auth() {
  return (
    <div className="auth">
      <div className="a-left">
        <img
          src="https://cdn.pixabay.com/photo/2020/03/10/18/41/blue-4919864_960_720.png"
          alt=""
        />
        <div className="webname">
          <h1>Social Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
}

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <button className="button infoButton">Login</button>
        <div className="loginForm">
          <span style={{ fontSize: "12px" }}>
            Don't have an account!{" "}
            <span className="noAccLog-Sign">
              <b>
                <u>Sign up</u>
              </b>
            </span>
          </span>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <button className="button infoButton" type="submit">
          Signup
        </button>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account.{" "}
            <span className="noAccLog-Sign">
              <b>
                <u>Log In</u>
              </b>
            </span>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Auth;
