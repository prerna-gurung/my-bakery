import Navbar from "../components/common/Navbar";
import List from "../components/List";
import Custom from "../components/Custom";
import Other from "../components/Other";
import Parallax from "../components/Parallax";
import Footer from "../components/common/Footer";
import Banner from "../components/Banner";
import CustomizeOrder from "../components/CustomizeOrder";
import "../styles/home.css";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />

      <List />
      <Custom />
      <Other />
      <Parallax />
      <CustomizeOrder />
      <Footer />
    </>
  );
}

export default Home;
