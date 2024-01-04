import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

import "./Header.css";
import auth from "../../firebase/firebase";
import { toast } from "react-toastify";

export default function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);

  const [signOut, loading, error] = useSignOut(auth);

  const logOutHandle = async () => {
    try {
      await signOut();
      toast.success("You are signed out");
      navigate("/login");
    } catch (error) {
      console.error("Error during sign out:", error.message);
      toast.error("An error occurred during sign out. Please try again.");
    }
  };
  return (
    <div className="">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/favorite">Favorite</NavLink>
            </li>

            <li>
              {user ? (
                <NavLink to="login">
                  <button>SignUp</button>
                </NavLink>
              ) : (
                <NavLink to="signup">
                  <button>SignUp</button>
                </NavLink>
              )}
            </li>
            <li>
              {user ? (
                <NavLink to="/login">
                  <button onClick={logOutHandle}>Log Out</button>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <button>Log In</button>
                </NavLink>
              )}
            </li>

            <li>
              <NavLink>
                <img src="" alt="" />
              </NavLink>
            </li>
          </ul>
          <h1 className="logo">Halal Job</h1>
        </div>
      </nav>
    </div>
  );
}
