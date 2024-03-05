import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import NoteForm from "../components/NoteForm";

const Write = ({ onCreate, noteEntries }) => {
  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <NoteForm onCreate={onCreate} />
        <MobileBottomBar />
      </div>
      <SideBar noteEntries={noteEntries} />
    </div>
  );
};

export default Write;
