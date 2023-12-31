import "./LogIn.css";

export default function LogIn() {
  return (
    <div className="body">
      <h1>Login</h1>
      <form className="login-form ">
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
