import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";

const Edit = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">{id}번 노트 수정 페이지</div>
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Edit;
