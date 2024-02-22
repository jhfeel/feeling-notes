import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import NoteItem from "../components/NoteItem";

const noteEntries = [
  {
    id: 1,
    dateTime: new Date("2024-02-22T10:00:00Z").toISOString(),
    situation: "새로운 프로젝트 시작",
    emotions: ["신남 🤩"],
    thoughts: "이번 프로젝트가 정말 기대된다. 잘 해낼 수 있을까?",
    memo: "내일 첫 회의",
  },
  {
    id: 2,
    dateTime: new Date("2024-03-01T15:30:00Z").toISOString(),
    situation: "중요한 프레젠테이션",
    emotions: ["불안 😟", "걱정 😦"],
    thoughts: "",
    memo: "",
  },
  {
    id: 3,
    dateTime: new Date("2024-03-15T20:00:00Z").toISOString(),
    situation: "오랜 친구와 재회",
    emotions: ["행복 😊"],
    thoughts: "정말 오랜만에 만난 친구라서 기분이 좋다.",
    memo: "",
  },
  {
    id: 4,
    dateTime: new Date("2024-04-10T13:00:00Z").toISOString(),
    situation: "갑작스러운 비 소식",
    emotions: ["걱정 😦"],
    thoughts: "비가 와서 약속에 늦지 않을까 걱정된다.",
    memo: "우산을 챙겨 나갔다.",
  },
  {
    id: 5,
    dateTime: new Date("2024-05-05T18:30:00Z").toISOString(),
    situation: "강아지와 산책",
    emotions: ["만족 😌", "기쁨 😁"],
    thoughts: "산책을 하니 마음이 편안해지고 기분이 좋아진다.",
    memo: "다음에도 시간을 내서 산책을 해야겠다.",
  },
];

const Home = () => {
  const noteList = noteEntries;
  const rows = [];

  noteList.forEach((item) => {
    rows.push(
      <div>
        <NoteItem
          dateTime={item.dateTime}
          situation={item.situation}
          emotions={item.emotions}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        {rows}
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Home;
