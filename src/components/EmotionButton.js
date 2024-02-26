import { useState } from "react";

const EmotionButton = ({
  emotionName,
  currentPage,
  onSelectedEmotionListChange,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (currentPage === "write") {
      if (isSelected) {
        // 해당 버튼이 원래 선택되어 있었다면 => selectedEmotionList에 해당 감정 추가
        onSelectedEmotionListChange((currentItems) =>
          currentItems.filter((element) => {
            return element !== emotionName;
          })
        );

        setIsSelected(false);
      } else {
        // 해당 버튼이 원래 선택되어 있지 않았다면 => selectedEmotionList에서 해당 감정 삭제
        onSelectedEmotionListChange((currentItems) => [
          ...currentItems,
          emotionName,
        ]);

        setIsSelected(true);
      }
    }
  };

  return (
    <button
      className={[
        "EmotionButton",
        isSelected || currentPage === "home" ? "EmotionButton-selected" : "",
      ].join(" ")}
      onClick={handleClick}
    >
      {emotionName}
    </button>
  );
};

export default EmotionButton;
