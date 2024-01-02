/* eslint-disable react/prop-types */
import "./Card.css";
import useJsonCmHook from "./useJsonCmHook";
import { Link, NavLink } from "react-router-dom";

export default function Card({ slice }) {
  const { data, isLoading, error } = useJsonCmHook(
    "http://localhost:9000/jobs"
  );
  // const fiveData = data && data.slice(0, 5);
  const fiveData = data && slice ? data.slice(0, 5) : data;

  const loadingMessage = <p>Data is Loading...</p>;
  const errorMessage = <p>{error}</p>;

  const allJobCard =
    fiveData &&
    fiveData.map((news) => {
      return (
        <>
          <div className="dataCart" key={news.id}>
            <img src={news.logo} alt="" />
            <h3>{news.title}</h3>
            <h5>
              <b>Company: </b> {news.companyName}
            </h5>
            <p>
              <b>Position: </b> {news.position}
            </p>
            <div className="details-btn">
              <Link to={`/jobdetails/${news.id}`}>
                <button>Details</button>
              </Link>
              <button>Apply Now</button>
            </div>
          </div>
        </>
      );
    });

  return (
    <>
      <div>
        <h1 className="latestJobs container">
          <span>Latest Job</span>
        </h1>
        <div className="card-main container">
          {error && errorMessage}
          {isLoading && loadingMessage}
          {allJobCard}

          <div className="seeBtn">
            <NavLink to="/jobs">
              <button className="job-all-btn">Explore All</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
