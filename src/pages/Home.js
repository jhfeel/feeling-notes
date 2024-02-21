import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />

        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Home;
