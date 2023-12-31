import { useNavigate } from "react-router-dom";
import "./Banner.css";

export default function Banner() {
  const navigete = useNavigate();

  const bannerExplpore = () => {
    navigete("/signup");
  };
  return (
    <div className="banner">
      <div className="container">
        <h2>
          Your Dream Job Awaits: <br /> Discover, Apply, Succeed!
        </h2>
        <p>
          Discover your dream career with us. Explore diverse opportunities{" "}
          <br /> and take the next step toward success. Your ideal job is just a
          click <br /> away!
        </p>
        <button onClick={bannerExplpore}>Explore Now</button>
      </div>
    </div>
  );
}
