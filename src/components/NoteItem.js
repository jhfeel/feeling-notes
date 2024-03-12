import EmotionButton from "./EmotionButton";
import { useNavigate } from "react-router-dom";
import { formatTimestamp, isoDateStringToLocalFormat } from "../utils/dateTime";

const NoteItem = ({ id, datetime, situation, emotions }) => {
  const navigate = useNavigate();
  const formattedDatetime = isoDateStringToLocalFormat(datetime);
  const emotionList = [];
  emotions.forEach((emotion, index) => {
    emotionList.push(
      <EmotionButton key={index} emotionName={emotion} currentPage={"home"} />
    );
  });

  return (
    <div
      className="NoteItem clickable"
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <div className="NoteItem-dateTime">{formattedDatetime}</div>
      <div className="NoteItem-situation">{situation}</div>
      <div className="emotion-button-list">{emotionList}</div>
    </div>
  );
};

export default NoteItem;
