import { useEffect, useState } from "react";

const EmotionButton = ({
  emotionName,
  currentPage,
  selectedEmotionList,
  onSelectedEmotionListChange,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (selectedEmotionList && selectedEmotionList.includes(emotionName)) {
      setIsSelected(true);
    }
  }, [selectedEmotionList, emotionName]);
  const handleClick = () => {
    if (currentPage === "write") {
      if (isSelected) {
        onSelectedEmotionListChange((currentItems) =>
          currentItems.filter((element) => {
            return element !== emotionName;
          })
        );

        setIsSelected(false);
      } else {
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
        isSelected || currentPage === "home" || currentPage === "detail"
          ? "EmotionButton-selected"
          : "",
      ].join(" ")}
      onClick={handleClick}
    >
      {emotionName}
    </button>
  );
};

export default EmotionButton;
