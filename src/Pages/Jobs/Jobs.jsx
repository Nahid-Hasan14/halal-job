import React from "react";
// import Card from "../../Comonents/Card/Card";
import useJsonCmHook from "../../Comonents/Card/useJsonCmHook";
import PostData from "../PostData/PostData";
import { NavLink } from "react-router-dom";

export default function Jobs() {
  const { data, isLoading, error } = useJsonCmHook(
    "http://localhost:9000/jobs"
  );
  //   const fiveData = data && data.slice(0, 5);
  //   const fiveData = data && slice ? data.slice(0, 5) : data;

  const loadingMessage = <p>Data is Loading...</p>;
  const errorMessage = <p>{error}</p>;

  const allJobCard =
    data &&
    data.map((news) => {
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
              <button>Details</button>
              <button>Apply Now</button>
            </div>
          </div>
        </>
      );
    });

  return (
    <>
      <div style={{ marginTop: "90px" }}>
        <h1 className="latestJobs container">
          <span>All JObs</span>
        </h1>
        <div className="card-main container">
          {error && errorMessage}
          {isLoading && loadingMessage}
          {allJobCard}
          <div className="">
            <NavLink to="/postdata">
              <button>Add New Job</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
