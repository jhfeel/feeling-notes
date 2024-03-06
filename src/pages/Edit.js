import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import NoteForm from "../components/NoteForm";
import { useEffect } from "react";

const Edit = ({ noteEntries, onEdit }) => {
  const { id } = useParams();
  const noteItem = noteEntries.find((note) => note.id === Number(id));

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = `${id}번 노트 수정`;
  }, [id]);

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <NoteForm noteItemToEdit={noteItem} onEdit={onEdit} />
        <MobileBottomBar />
      </div>
      <SideBar noteEntries={noteEntries} />
    </div>
  );
};

export default Edit;
