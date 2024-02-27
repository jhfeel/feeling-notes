import { formatTimestamp } from "../utils/dateTime";
import EmotionButton from "./EmotionButton";

const NoteItem = ({ timestamp, situation, emotions }) => {
  const dateTime = formatTimestamp(timestamp);
  const emotionList = [];
  emotions.forEach((emotion, index) => {
    emotionList.push(
      <EmotionButton
        key={index}
        emotionName={emotion}
        isSelected={true}
        currentPage={"home"}
      />
    );
  });

  return (
    <div className="NoteItem">
      <div>{dateTime}</div>
      <div>{situation}</div>
      <div className="selected-emotions-list">{emotionList}</div>
    </div>
  );
};

export default NoteItem;
