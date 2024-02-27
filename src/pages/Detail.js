import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import { formatTimestamp } from "../utils/dateTime";
import EmotionButton from "../components/EmotionButton";

const Detail = ({ noteEntries }) => {
  const { id } = useParams();
  const noteItem = noteEntries.find((item) => item.id === Number(id));
  const emotionList = [];
  noteItem.emotions.forEach((emotion, index) => {
    emotionList.push(
      <EmotionButton key={index} emotionName={emotion} currentPage={"detail"} />
    );
  });

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">
          <h4>일시</h4>
          <div>{formatTimestamp(noteItem.timestamp)}</div>
          <h4>상황</h4>
          <div>{noteItem.situation}</div>
          <h4>감정</h4>
          <div className="emotionButtonList-container">{emotionList}</div>
          <h4>생각</h4>
          <div>{noteItem.thoughts}</div>
          <h4>메모</h4>
          <div>{noteItem.memo}</div>
        </div>
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Detail;
