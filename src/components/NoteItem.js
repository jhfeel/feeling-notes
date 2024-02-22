import EmotionButton from "./EmotionButton";

const NoteItem = ({ dateTime, situation, emotions }) => {
  const emotionList = [];
  emotions.forEach((emotion) => {
    emotionList.push(<EmotionButton emotionName={emotion} isSelected={true} />);
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
