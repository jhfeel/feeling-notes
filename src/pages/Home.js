import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import NoteItem from "../components/NoteItem";

const Home = ({ noteEntries }) => {
  const noteList = noteEntries.slice();
  noteList.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  const rows = [];

  noteList.forEach((item, index) => {
    rows.push(
      <NoteItem
        key={index}
        timestamp={item.timestamp}
        situation={item.situation}
        emotions={item.emotions}
      />
    );
  });

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">{rows}</div>
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Home;
