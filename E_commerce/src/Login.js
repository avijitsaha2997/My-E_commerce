import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./a_logo2.png";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history("/");
      })
      .catch(error => alert(error));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // sucessfully created a new user
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch(error => alert(error));
  };

  return (
    <div className="login">
        <Link to="/">
            <div className="login__logo__div1"><div className="login__logo__div2"><img className="login__logo" src={logo} alt="" /></div></div>
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form action="#">
              <h5>E-mail</h5>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
              <button
              type="submit"
              onClick={signIn}
              className="login__signInButton">Sign In</button>

            </form>
            <p>
              By signing-in you agree to all of the Condition of Use & Sale. Please see our Privacy Notice, our cookies Notice and Interest-Based Ads
              Notice.
            </p>
            <button onClick={register}
            className="login__registerButton">Create your Account</button>
        </div>
    </div>
  );
}

export default Login;
