import EmotionButton from "./EmotionButton";
import { useNavigate } from "react-router-dom";
import { formatTimestamp } from "../utils/dateTime";

const NoteItem = ({ id, timestamp, situation, emotions }) => {
  const navigate = useNavigate();
  const dateTime = formatTimestamp(timestamp);
  const emotionList = [];
  emotions.forEach((emotion, index) => {
    emotionList.push(
      <EmotionButton key={index} emotionName={emotion} currentPage={"home"} />
    );
  });

  return (
    <div
      className="NoteItem"
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <div className="NoteItem-dateTime">{dateTime}</div>
      <div className="NoteItem-situation">{situation}</div>
      <div className="NoteItem-emotions">{emotionList}</div>
    </div>
  );
};

export default NoteItem;
