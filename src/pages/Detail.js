import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import { useNavigate, useParams } from "react-router-dom";
import { isoDateStringToLocalFormat } from "../utils/dateTime";
import EmotionButton from "../components/EmotionButton";
import ActionButton from "../components/ActionButton";
import { useEffect, useState } from "react";

const Detail = ({ userNotes, onRemove }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const emotionList = [];
  const [datetime, setDatetime] = useState("");
  const [situation, setSituation] = useState("");
  const [selectedEmotionList, setSelectedEmotionList] = useState([]);
  const [thoughts, setThoughts] = useState("");
  const [memo, setMemo] = useState("");

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = "Feeling Notes - 노트 상세";
  }, [id]);

  useEffect(() => {
    const noteItem = userNotes.find((item) => item.id === Number(id));
    if (noteItem) {
      setDatetime(isoDateStringToLocalFormat(noteItem.event_datetime));
      setSituation(noteItem.situation);
      setSelectedEmotionList(noteItem.emotions);
      setThoughts(noteItem.thoughts);
      setMemo(noteItem.memo);
    } else {
      alert("존재하지 않는 노트입니다.");
      navigate("/", { replace: true });
    }
  }, [id, userNotes, navigate]);

  selectedEmotionList.forEach((emotion, index) => {
    emotionList.push(
      <EmotionButton key={index} emotionName={emotion} currentPage={"detail"} />
    );
  });

  const handleEditButtonClick = () => {
    navigate(`/edit/${id}`);
  };

  const handleRemoveButtonClick = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      onRemove(id);

      navigate("/", { replace: true });
    }
  };

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">
          <section>
            <h4>일시</h4>
            <div className="content-box date-time-box">{datetime}</div>
          </section>
          <section>
            <h4>상황</h4>
            <div className="content-box">{situation}</div>
          </section>
          <section>
            <h4>감정</h4>
            <div className="emotion-button-list">{emotionList}</div>
          </section>
          <section>
            <h4>생각</h4>
            <div className="content-box">{thoughts}</div>
          </section>
          <section>
            <h4>메모</h4>
            <div className="content-box">{memo}</div>
          </section>
          <section className="action-button-container">
            <ActionButton type={"edit"} onClick={handleEditButtonClick} />
            <ActionButton type={"remove"} onClick={handleRemoveButtonClick} />
          </section>
        </div>
        <MobileBottomBar />
      </div>
      <SideBar userNotes={userNotes} />
    </div>
  );
};

export default Detail;
