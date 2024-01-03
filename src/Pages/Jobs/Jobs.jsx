/* eslint-disable no-unused-vars */
import React from "react";
// import Card from "../../Comonents/Card/Card";
import useJsonCmHook from "../../Comonents/Card/useJsonCmHook";
import { Link, NavLink } from "react-router-dom";

import "./Jobs.css";
import axios from "axios";

export default function Jobs() {
  const { data, isLoading, error } = useJsonCmHook(
    "http://localhost:9000/jobs"
  );
  //   const fiveData = data && data.slice(0, 5);
  //   const fiveData = data && slice ? data.slice(0, 5) : data;
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9000/jobs/${id}`);
      console.log(response.data);
      // Handle the response data here (usually empty for a successful delete)
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle errors here
    }
  };
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
              <Link to={`/jobdetails/${news.id}`}>
                <button>Details</button>
              </Link>
              <button onClick={() => handleDelete(news.id)}>Delete</button>
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
        </div>
        <div className="add-new-job container">
          <NavLink to="/postdata">
            <button>Add New Job</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
