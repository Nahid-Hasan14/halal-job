// import auth from "../../../firebase/firebase";
// import { useState } from "react";
// import { toast } from "react-toastify";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase";

import "./SignUp.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export default function SignUp() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true, //send email for verification
    });

  const [updateProfile, updating] = useUpdateProfile(auth);

  const naviget = useNavigate();

  const signUpHandel = async (e) => {
    try {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      // console.log(name, email, password, confirmPassword);

      if (password !== confirmPassword) {
        return toast.error("Password dosn't match");
      }
      if (!name || !email || !password || !confirmPassword) {
        return toast.error("Please fill up input");
      }

      await createUserWithEmailAndPassword(email, password);
      console.log(user);
      await updateProfile({ displayName: name });
      // await updateProfile({ photoURL:  });

      // User creation successful

      e.target.name.value = "";
      e.target.email.value = "";
      e.target.password.value = "";
      e.target.confirmPassword.value = "";

      toast.success("Sign up succeeded. Thank you!");
      naviget("/");
    } catch (error) {
      // Handle errors here
      console.error("Error during sign up:", error.message);
      toast.error("An error occurred during sign up. Please try again.");
    }
  };

  //google sign up handle
  const googleHandle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign Uped");
        naviget("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //GitHib sign up handle
  const gitHubHandle = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup-container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          <div className="sign-up-with">
            <button onClick={googleHandle}>
              Sign Up with-
              <FaGoogle />
            </button>
            <button onClick={gitHubHandle}>
              Sign Up with-
              <FaGithub />
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <a onClick={() => naviget("/login")}>Log In</a>
          </p>
        </div>
        <div className="form">
          <form onSubmit={signUpHandel} action="/register" method="post">
            <input type="text" name="name" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your Password"
            />

            <button>Sign Up</button>
          </form>
        </div>
        {/* <div className="card_terms">
          <input type="checkbox" name="" id="terms" />
          <span>
            I have read and agree to the <a href="">Terms of Service</a>
          </span>
        </div> */}
      </div>
    </div>
  );
}
