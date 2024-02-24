import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";

const Detail = () => {
  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">상세 페이지</div>
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Detail;
