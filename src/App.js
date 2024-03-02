import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const dummyData = [
  //   {
  //     id: 0,
  //     timestamp: 1700652400000,
  //     situation: "팀 빌딩 워크숍",
  //     emotions: ["기쁨 😁", "신남 🤩"],
  //     thoughts: "팀워크가 정말 중요하다는 걸 다시 한번 깨달았다.",
  //     memo: "다음 워크숍도 기대됨",
  //   },
  //   {
  //     id: 1,
  //     timestamp: 1700599820000,
  //     situation: "해외 출장 준비",
  //     emotions: ["불안 😟", "기대감 😃"],
  //     thoughts: "처음 가보는 나라라서 설레지만 조금 불안하다.",
  //     memo: "여권과 비자 확인 필요",
  //   },
  //   {
  //     id: 2,
  //     timestamp: 1700740140000,
  //     situation: "자기계발 세미나 참석",
  //     emotions: ["행복 😊"],
  //     thoughts: "새로운 것을 배우는 경험이 나를 성장시킨다는 걸 느낌.",
  //     memo: "관련 도서 구매 고려",
  //   },
  //   {
  //     id: 3,
  //     timestamp: 1700187480000,
  //     situation: "취미 클래스 첫 수업",
  //     emotions: ["신남 🤩", "성취감 🏆"],
  //     thoughts: "첫 수업이 생각보다 흥미롭고 즐거웠다. 다음 수업이 기다려짐.",
  //     memo: "필요한 재료 미리 준비하기",
  //   },
  //   {
  //     id: 4,
  //     timestamp: 1700968677000,
  //     situation: "가족과의 여행 계획",
  //     emotions: ["기대감 😃", "행복 😊"],
  //     thoughts: "오랜만에 가족 모두가 함께하는 여행이라 기대가 크다.",
  //     memo: "숙소와 항공권 예약 확인",
  //   },
  //   {
  //     id: 5,
  //     timestamp: 1700080993000,
  //     situation: "개인 프로젝트 시작",
  //     emotions: ["희망 🌟", "기대감 😃"],
  //     thoughts: "새로운 프로젝트를 시작하는 것은 항상 설레는 일이다.",
  //     memo: "계획서 작성 및 일정 조정",
  //   },
  //   {
  //     id: 6,
  //     timestamp: 1700844278000,
  //     situation: "친구 결혼식",
  //     emotions: ["행복 😊", "다정함 🥰"],
  //     thoughts: "친구의 결혼식에 참석하며 많은 감동을 받았다.",
  //     memo: "축하 선물 준비하기",
  //   },
  //   {
  //     id: 7,
  //     timestamp: 1700747804000,
  //     situation: "주말 등산 계획",
  //     emotions: ["기대감 😃"],
  //     thoughts: "주말에 친구들과 함께하는 등산이 기대된다. 날씨가 좋기를.",
  //     memo: "등산로 정보와 필요 장비 체크",
  //   },
  //   {
  //     id: 8,
  //     timestamp: 1700207172000,
  //     situation: "자원봉사 활동",
  //     emotions: ["자랑스러움 😎", "행복 😊"],
  //     thoughts: "자원봉사를 통해 작은 도움이 되길 바란다. 다시 참여하고 싶음.",
  //     memo: "다음 봉사활동 일정 확인",
  //   },
  //   {
  //     id: 9,
  //     timestamp: 1700442765000,
  //     situation: "새로운 책 시작",
  //     emotions: ["희망 🌟", "기대감 😃"],
  //     thoughts: "많은 추천을 받은 책을 시작했다. 많은 것을 배울 수 있길.",
  //     memo: "독서 모임에서 의견 공유 예정",
  //   },
  // ];

  const [noteEntries, setNoteEntries] = useState([]);
  const [lastNoteId, setLastNoteId] = useState(-1);

  useEffect(() => {
    const notesData = localStorage.getItem("Feeling Notes");

    if (notesData === null) {
      localStorage.setItem("Feeling Notes", JSON.stringify([]));
    } else {
      setNoteEntries(JSON.parse(notesData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Feeling Notes", JSON.stringify(noteEntries));
  }, [noteEntries]);

  const onCreate = (newNote) => {
    const newEntry = { id: lastNoteId + 1, ...newNote };

    setNoteEntries([...noteEntries, newEntry]);
    setLastNoteId(lastNoteId + 1);
  };

  const onEdit = (targetNoteId, EditedNote) => {
    setNoteEntries(
      noteEntries.map((entry) => {
        return (entry =
          entry.id === targetNoteId
            ? { id: targetNoteId, ...EditedNote }
            : entry);
      })
    );

    // const targetNote = noteEntries.find((note) => note.id === targetNoteId);
    // targetNote.timestamp = EditedNote.timestamp;
    // targetNote.situation = EditedNote.situation;
    // targetNote.emotions = EditedNote.emotions;
    // targetNote.thoughts = EditedNote.thoughts;
    // targetNote.memo = EditedNote.memo;
    // localStorage.setItem("Feeling Notes", JSON.stringify(noteEntries));
  };

  const onRemove = (targetNoteId) => {
    setNoteEntries(
      noteEntries.filter((note) => note.id !== Number(targetNoteId))
    );
    // localStorage.setItem("Feeling Notes", JSON.stringify(noteEntries));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home noteEntries={noteEntries} />} />
        <Route path="/write" element={<Write onCreate={onCreate} />} />
        <Route
          path="/edit/:id"
          element={<Edit noteEntries={noteEntries} onEdit={onEdit} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail noteEntries={noteEntries} onRemove={onRemove} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
