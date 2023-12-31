import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../../Comonents/Banner/Banner";
import Card from "../../Comonents/Card/Card";
export default function Home() {
  return (
    <div className="Prents">
      <Header />
      <Banner />
      <Card />
      <Footer className="paragraph" />
    </div>
  );
}
