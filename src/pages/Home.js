import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import NoteItem from "../components/NoteItem";
import { useEffect } from "react";

const Home = ({ userNotes }) => {
  const noteList = userNotes.slice();
  noteList.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  const rows = [];

  noteList.forEach((item, index) => {
    rows.push(
      <NoteItem
        key={index}
        id={item.id}
        datetime={item.event_datetime}
        situation={item.situation}
        emotions={item.emotions}
      />
    );
  });

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = "Feeling Notes";
  }, []);

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">{rows}</div>
        <MobileBottomBar />
      </div>
      <SideBar noteEntries={userNotes} />
    </div>
  );
};

export default Home;
