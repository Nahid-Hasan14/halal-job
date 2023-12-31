import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../../Comonents/Banner/Banner";

export default function Home() {
  return (
    <div className="Prents">
      <Header />
      <Banner />
      <Footer className="paragraph" />
    </div>
  );
}
