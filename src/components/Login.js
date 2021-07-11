import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { SET_USER } from "../constants";
import { auth, provider } from "../firebase";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      const {
        user: { uid, displayName, email, photoURL },
      } = await auth.signInWithPopup(provider);

      const token = await auth?.currentUser?.getIdToken(true);

      if (token) {
        localStorage.setItem("@token", token);
        localStorage.setItem("@uid", uid);
      }

      return dispatch({
        type: SET_USER,
        userPayload: { uid, displayName, email, photoURL },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png"
          alt="Fb_logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Face
          Book"
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
