import { useLoaderData } from "react-router-dom";

import "./JobDetails.css";

export default function JobDetails() {
  const { logo, title, companyName, position, description } = useLoaderData();
  // useLoaderData anchi router er loader theke , loader er data recive korar jonno useLoaderData  import korte hoy.

  //   const data = useLoaderData();
  //   console.log(data);
  return (
    <div className="job-details container">
      <img src={logo} alt="" />
      <h2>{title}</h2>
      <h3>{companyName}</h3>
      <h4>{position}</h4>
      <p>{description}</p>
      <button>Apply Now</button>
    </div>
  );
}
