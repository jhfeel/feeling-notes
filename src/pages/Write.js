import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import NoteForm from "../components/NoteForm";

const Write = ({ onCreate }) => {
  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <NoteForm onCreate={onCreate} />
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Write;
