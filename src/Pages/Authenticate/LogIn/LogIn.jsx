import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import "./LogIn.css";
import auth from "../../../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  console.log(user);

  const navigate = useNavigate();

  const signInHandle = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      await signInWithEmailAndPassword(email, password);
      e.target.email.value = "";
      e.target.password.value = "";
      console.log(user);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      // Handle errors here
      console.error("Error during sign up:", error.message);
    }
  };
  return (
    <div className="body">
      <h1>Login</h1>
      <form onSubmit={signInHandle} className="login-form ">
        <div className="row">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="row">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Confirm Your Password"
          />
        </div>
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
