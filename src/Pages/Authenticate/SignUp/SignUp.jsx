// import { createUserWithEmailAndPassword } from "firebase/auth";
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

export default function SignUp() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true, //send email for verification
    });

  const signUpHandel = (e) => {
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

    createUserWithEmailAndPassword(email, password);
    console.log(user);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.confirmPassword.value = "";
    return toast.success("Sign up Successed. Thank You!");
  };

  return (
    <div className="signup-container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          <span>
            Already have an account? <a href="login">Log In</a>
          </span>
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
        <div className="card_terms">
          <input type="checkbox" name="" id="terms" />
          <span>
            I have read and agree to the <a href="">Terms of Service</a>
          </span>
        </div>
      </div>
    </div>
  );
}

/*-----
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase";

import { useState } from "react";
import { toast } from "react-toastify";

import "./SignUp.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPAssword] = useState();

  const signUpHandel = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password doesn't match");
    }
    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Emty Input");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("Account created successfully!");

        // ...
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPAssword("");
  };

  return (
    <div className="signup-container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          <span>
            Already have an account? <a href="login">Log In</a>
          </span>
        </div>
        <div className="form">
          <form onSubmit={signUpHandel} action="/register" method="post">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              onChange={(e) => setConfirmPAssword(e.target.value)}
              type="password"
              name="confirmPassword"
              placeholder="Confirm your Password"
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="card_terms">
          <input type="checkbox" name="" id="terms" />
          <span>
            I have read and agree to the <a href="">Terms of Service</a>
          </span>
        </div>
      </div>
    </div>
  );
}
*/
