import { useState } from "react";
import EmotionButton from "../components/EmotionButton";
import { formatDateTime } from "../utils/dateTime";
import ActionButton from "../components/ActionButton";
import { useNavigate } from "react-router-dom";

const NoteForm = ({ onCreate, noteItemToEdit, onEdit }) => {
  const isEditMode = noteItemToEdit != null;
  const [dateTime, setDateTime] = useState(
    isEditMode ? new Date(noteItemToEdit.timestamp) : new Date()
  );
  const [situation, setSituation] = useState(
    isEditMode ? noteItemToEdit.situation : ""
  );
  const [selectedEmotionList, setSelectedEmotionList] = useState(
    isEditMode ? noteItemToEdit.emotions : []
  );
  const [thoughts, setThoughts] = useState(
    isEditMode ? noteItemToEdit.thoughts : ""
  );
  const [memo, setMemo] = useState(isEditMode ? noteItemToEdit.memo : "");
  const navigate = useNavigate();

  const emotionList = [
    "감사 🙏",
    "만족 😌",
    "희망 🌟",
    "행복 😊",
    "기쁨 😁",
    "쾌감 😁",
    "신남 🤩",
    "열망 😍",
    "자랑스러움 😎",
    "성취감 🏆",
    "다정함 🥰",
    "기대감 😃",
    "사랑 💕",
    "우울 😞",
    "불안 😟",
    "걱정 😦",
    "화남 😠",
    "자신 없음 🙁",
    "절망적 😩",
    "부담감 😫",
    "창피함 😳",
    "속상함 😢",
    "슬픔 😭",
    "실망 😕",
    "미안함 😓",
    "귀찮음 😒",
    "후회 😔",
  ];
  const emotionButtonList = [];

  emotionList.forEach((emotion, index) => {
    emotionButtonList.push(
      <EmotionButton
        key={index}
        emotionName={emotion}
        currentPage={"write"}
        selectedEmotionList={selectedEmotionList}
        onSelectedEmotionListChange={setSelectedEmotionList}
      />
    );
  });

  const handleCancleButtonClick = () => {
    if (window.confirm("작성을 취소하시겠습니까?")) {
      navigate("/");
    }
  };

  const handleSubmitButtonClick = () => {
    if (isEditMode) {
      if (window.confirm("수정하시겠습니까?")) {
        onEdit(noteItemToEdit.id, {
          timestamp: dateTime.getTime(),
          situation,
          emotions: selectedEmotionList,
          thoughts,
          memo,
        });

        navigate("/");
      }
    } else {
      if (window.confirm("새 노트를 만드시겠습니까?")) {
        onCreate({
          timestamp: dateTime.getTime(),
          situation,
          emotions: selectedEmotionList,
          thoughts,
          memo,
        });

        navigate("/");
      }
    }
  };

  return (
    <div className="contents-container">
      <div>
        <h4>언제인가요?</h4>
        <input
          type="datetime-local"
          name="dateTime"
          value={formatDateTime(dateTime)}
          onChange={(e) => {
            console.log(e.target.value);
            console.log(new Date(e.target.value));
            console.log(formatDateTime(new Date(e.target.value)));
            setDateTime(new Date(e.target.value));
            // return e.target.value;
          }}
        ></input>
      </div>
      <div>
        <h4>어떤 상황이었나요?</h4>
        <textarea
          value={situation}
          onChange={(e) => {
            setSituation(e.target.value);
          }}
        />
      </div>
      <div>
        <h4>그때, 어떤 감정을 느꼈나요?</h4>
        <div className="emotionButtonList-container">{emotionButtonList}</div>
      </div>
      <div>
        <h4>그 순간, 어떤 생각을 하고 있었나요?</h4>
        <textarea
          value={thoughts}
          onChange={(e) => {
            setThoughts(e.target.value);
          }}
        />
      </div>
      <div>
        <h4>메모하기</h4>
        <textarea
          value={memo}
          onChange={(e) => {
            setMemo(e.target.value);
          }}
        />
      </div>
      <ActionButton type={"cancel"} onClick={handleCancleButtonClick} />
      <ActionButton type={"submit"} onClick={handleSubmitButtonClick} />
    </div>
  );
};

export default NoteForm;