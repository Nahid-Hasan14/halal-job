import { useLoaderData } from "react-router-dom";

export default function JobDetails() {
  const { logo, title, companyName, position, description } = useLoaderData();
  //   const data = useLoaderData();
  //   console.log(data);
  return (
    <div style={{ marginTop: "100px" }}>
      <img src={logo} alt="" />
      <h2>{title}</h2>
      <h3>{companyName}</h3>
      <h4>{position}</h4>
      <p>{description}</p>
    </div>
  );
}
