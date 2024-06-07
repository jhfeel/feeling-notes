import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";
import emotionList from "../data/emotionList";
import { formatDate } from "../utils/dateTime";

const Home = ({ userNotes, setUserNotes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const noteList = userNotes.slice();
  noteList.sort((a, b) => {
    return b.event_datetime.localeCompare(a.event_datetime);
  });

  const filteredNotes = noteList.filter((note) => {
    const matchesEmotion =
      !selectedEmotion || note.emotions.includes(selectedEmotion);
    const matchesSearch =
      note.situation.includes(searchTerm) ||
      note.thoughts.includes(searchTerm) ||
      note.memo.includes(searchTerm);
    return matchesEmotion && matchesSearch;
  });

  const rows =
    !selectedEmotion && searchTerm === ""
      ? noteList.map((item, index) => (
          <NoteItem
            key={index}
            id={item.id}
            datetime={item.event_datetime}
            situation={item.situation}
            emotions={item.emotions}
          />
        ))
      : filteredNotes.map((item, index) => (
          <NoteItem
            key={index}
            id={item.id}
            datetime={item.event_datetime}
            situation={item.situation}
            emotions={item.emotions}
          />
        ));

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedEmotion("");
  };

  useEffect(() => {
    console.log("zz", selectedEmotion);
  }, [selectedEmotion]);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = "Feeling Notes";
  }, []);

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="filter-box">
          <input
            className="filter-item search-input"
            type="text"
            placeholder="상황, 생각, 메모 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="filter-item emotion-filter"
            name="emotion"
            value={selectedEmotion}
            onChange={(e) => setSelectedEmotion(e.target.value)}
          >
            <option className="emotion-dropdown-item" value="">
              모든 감정 💭
            </option>
            {emotionList.map((emotion, index) => (
              <option key={index} className="emotion-dropdown-item">
                {emotion}
              </option>
            ))}
          </select>
          <button
            className="filter-item filter-reset-btn"
            onClick={handleResetFilters}
          >
            Reset
          </button>
        </div>
        <div className="contents-container">{rows}</div>
        <MobileBottomBar />
      </div>
      <SideBar userNotes={userNotes} />
    </div>
  );
};

export default Home;
