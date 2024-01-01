import "./Card.css";
import useJsonCmHook from "./useJsonCmHook";

export default function Card() {
  const { data, isLoading, error } = useJsonCmHook(
    "http://localhost:9000/jobs"
  );
  const fiveData = data && data.slice(0, 5);

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
              <button>Details</button>
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
            <button className="job-all-btn">Explore All</button>
          </div>
        </div>
      </div>
    </>
  );
}
