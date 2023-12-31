import useJsonCmHook from "./useJsonCmHook";

export default function Card() {
  const { data, isLoding, error } = useJsonCmHook("http://localhost:9000/jobs");

  const loadingMessage = <p>Data is Loading...</p>;
  const errorMessage = <p>{error}</p>;

  const allJobCard =
    data &&
    data.map((news) => {
      return <p key={news.id}>{news.title}</p>;
    });

  return (
    <div>
      <h1>Most Popular Job</h1>
      {error && errorMessage}
      {isLoding && loadingMessage}
      {allJobCard}
    </div>
  );
}
