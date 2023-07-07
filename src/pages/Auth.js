import React from "react";
import Logo from "../images/Logo.png";
import barista from "../images/undraw_barista_at0v 1.png";
import facebook from "../images/facebook_logo.png";
import google from "../images/google_logo.png";
import styles from "../css.modules/App.module.css";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../fbase";

function Auth() {
  const providerGoogle = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();

  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, providerGoogle);
  };

  const handleFacebookLogin = async () => {
    await signInWithPopup(auth, providerFacebook);
  };

  return (
    <div>
      <div className={styles.title}>
        <h1>
          Give MY__ <br />
          Seat
          <img src={Logo} alt="Logo" />
        </h1>
      </div>

      <p className={styles.login_p}>로그인</p>

      <div className={styles.login_box}>
        <button onClick={handleGoogleLogin}>
          <img src={google} alt="google" />
        </button>
        <button onClick={handleFacebookLogin}>
          <img src={facebook} alt="facebook" />
        </button>
      </div>

      <img className={styles.barist_img} src={barista} alt="barista" />
    </div>
  );
}

export default Auth;
