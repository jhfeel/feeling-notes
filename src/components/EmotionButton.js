import { useState } from "react";

const EmotionButton = ({ emotionName, currentPage }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      className={[
        "EmotionButton",
        isSelected || currentPage === "home" ? "EmotionButton-selected" : "",
      ].join(" ")}
      onClick={() => {
        if (currentPage === "write") {
          isSelected ? setIsSelected(false) : setIsSelected(true);
        }
      }}
    >
      {emotionName}
    </button>
  );
};

export default EmotionButton;
