import { useState } from "react";
import EmotionButton from "../components/EmotionButton";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import { formatDateTime } from "../utils/dateTime";
import ActionButton from "../components/ActionButton";

const Write = () => {
  const [dateTime, setDateTime] = useState(formatDateTime(new Date()));
  const [situation, setSituation] = useState("");
  const [selectedEmotionList, setSelectedEmotionList] = useState([]);
  const [thoughts, setThoughts] = useState("");
  const [memo, setMemo] = useState("");

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

  emotionList.forEach((emotion) => {
    emotionButtonList.push(
      <EmotionButton
        emotionName={emotion}
        currentPage={"write"}
        onSelectedEmotionListChange={setSelectedEmotionList}
      />
    );
  });

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">
          <h4>언제인가요?</h4>
          <input
            type="datetime-local"
            name="dateTime"
            value={dateTime}
            onChange={(e) => {
              setDateTime(e.target.value);
            }}
          ></input>
          <h4>어떤 상황이었나요?</h4>
          <textarea
            value={situation}
            onChange={(e) => {
              setSituation(e.target.value);
            }}
          />
          <h4>그때, 어떤 감정을 느꼈나요?</h4>
          <div className="emotionButtonList-container">{emotionButtonList}</div>
          <h4>그 순간, 어떤 생각을 하고 있었나요?</h4>
          <textarea
            value={thoughts}
            onChange={(e) => {
              setThoughts(e.target.value);
            }}
          />
          <h4>메모하기</h4>
          <textarea
            value={memo}
            onChange={(e) => {
              setMemo(e.target.value);
            }}
          />
        </div>
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Write;
