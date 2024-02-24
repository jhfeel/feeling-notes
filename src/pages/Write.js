import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";

const Write = () => {
  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">
          <h4>언제인가요?</h4>
          <input></input>
          <h4>어떤 상황이었나요?</h4>
          <textarea />
          <h4>그때, 어떤 감정을 느꼈나요?</h4>
          <textarea />
          <h4>그 순간, 어떤 생각을 하고 있었나요?</h4>
          <textarea />
          <h4>메모하기</h4>
          <textarea />
        </div>
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Write;
