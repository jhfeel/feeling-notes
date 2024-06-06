import { useState } from "react";
import emotionList from "../data/emotionList";
import EmotionButton from "./EmotionButton";

const FilterBox = () => {
  const [selectedEmotionList, setSelectedEmotionList] = useState([]);

  const emotionButtonList = emotionList.map((emotion, index) => (
    <EmotionButton
      key={index}
      emotionName={emotion}
      currentPage={"filter"}
      selectedEmotionList={selectedEmotionList}
      onSelectedEmotionListChange={setSelectedEmotionList}
    />
  ));

  return (
    <div className="FilterBox">
      <div>
        <h4>기간</h4>
        <input type="date" name="startDate"></input>
        {" ~ "}
        <input type="date" name="endDate"></input>
      </div>
      <div>
        <h4>감정</h4>
        <div className="emotion-button-list">{emotionButtonList}</div>
      </div>
    </div>
  );
};

export default FilterBox;
