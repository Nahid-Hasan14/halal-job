import "./Card.css";
import useJsonCmHook from "./useJsonCmHook";

export default function Card() {
  const { data, isLoding, error } = useJsonCmHook("http://localhost:9000/jobs");

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
          </div>
        </>
      );
    });

  return (
    <>
      <div>
        <h1 className="latestJobs container">Latest Job</h1>
        <div className="card-main container">
          {error && errorMessage}
          {isLoding && loadingMessage}
          {allJobCard}
          <div className="seeBtn">
            <button className="job-all-btn">Explore All</button>
          </div>
        </div>
      </div>
    </>
  );
}
