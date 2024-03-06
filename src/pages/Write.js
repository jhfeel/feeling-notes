import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import NoteForm from "../components/NoteForm";
import { useEffect } from "react";

const Write = ({ onCreate, noteEntries }) => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = "노트 작성";
  }, []);

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
