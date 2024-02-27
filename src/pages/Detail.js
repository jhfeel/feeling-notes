import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import { useNavigate, useParams } from "react-router-dom";
import { formatTimestamp } from "../utils/dateTime";
import EmotionButton from "../components/EmotionButton";
import ActionButton from "../components/ActionButton";

const Detail = ({ noteEntries }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const noteItem = noteEntries.find((item) => item.id === Number(id));
  const emotionList = [];

  noteItem.emotions.forEach((emotion, index) => {
    emotionList.push(
      <EmotionButton key={index} emotionName={emotion} currentPage={"detail"} />
    );
  });

  const handleEditButtonClick = () => {
    navigate(`/edit/${id}`);
  };

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
          <ActionButton type={"edit"} onClick={handleEditButtonClick} />
          <ActionButton type={"remove"} />
        </div>
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Detail;
