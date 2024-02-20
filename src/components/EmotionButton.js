const EmotionButton = ({ emotionName, isSelected }) => {
  return (
    <button
      className={`EmotionButton ${isSelected ? "EmotionButton-selected" : ""}`}
    >
      {emotionName}
    </button>
  );
};

export default EmotionButton;
