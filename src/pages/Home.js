import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import NoteItem from "../components/NoteItem";

const noteEntries = [
  {
    id: 1,
    timestamp: 1700652400,
    situation: "팀 빌딩 워크숍",
    emotions: ["기쁨 😁", "신남 🤩"],
    thoughts: "팀워크가 정말 중요하다는 걸 다시 한번 깨달았다.",
    memo: "다음 워크숍도 기대됨",
  },
  {
    id: 2,
    timestamp: 1700599820,
    situation: "해외 출장 준비",
    emotions: ["불안 😟", "기대됨 😊"],
    thoughts: "처음 가보는 나라라서 설레지만 조금 불안하다.",
    memo: "여권과 비자 확인 필요",
  },
  {
    id: 3,
    timestamp: 1700740140,
    situation: "자기계발 세미나 참석",
    emotions: ["행복 😊", "도전적 😤"],
    thoughts: "새로운 것을 배우는 경험이 나를 성장시킨다는 걸 느낌.",
    memo: "관련 도서 구매 고려",
  },
  {
    id: 4,
    timestamp: 1700187480,
    situation: "취미 클래스 첫 수업",
    emotions: ["신남 🤩", "흥미로움 😮"],
    thoughts: "첫 수업이 생각보다 흥미롭고 즐거웠다. 다음 수업이 기다려짐.",
    memo: "필요한 재료 미리 준비하기",
  },
  {
    id: 5,
    timestamp: 1700968677,
    situation: "가족과의 여행 계획",
    emotions: ["기대됨 😊", "행복 😊"],
    thoughts: "오랜만에 가족 모두가 함께하는 여행이라 기대가 크다.",
    memo: "숙소와 항공권 예약 확인",
  },
  {
    id: 6,
    timestamp: 1700080993,
    situation: "개인 프로젝트 시작",
    emotions: ["도전적 😤", "기대됨 😊"],
    thoughts: "새로운 프로젝트를 시작하는 것은 항상 설레는 일이다.",
    memo: "계획서 작성 및 일정 조정",
  },
  {
    id: 7,
    timestamp: 1700844278,
    situation: "친구 결혼식",
    emotions: ["행복 😊", "감동적 😭"],
    thoughts: "친구의 결혼식에 참석하며 많은 감동을 받았다.",
    memo: "축하 선물 준비하기",
  },
  {
    id: 8,
    timestamp: 1700747804,
    situation: "주말 등산 계획",
    emotions: ["기대됨 😊", "활기참 🌟"],
    thoughts: "주말에 친구들과 함께하는 등산이 기대된다. 날씨가 좋기를.",
    memo: "등산로 정보와 필요 장비 체크",
  },
  {
    id: 9,
    timestamp: 1700207172,
    situation: "자원봉사 활동",
    emotions: ["보람참 😇", "행복 😊"],
    thoughts: "자원봉사를 통해 작은 도움이 되길 바란다. 다시 참여하고 싶음.",
    memo: "다음 봉사활동 일정 확인",
  },
  {
    id: 10,
    timestamp: 1700442765,
    situation: "새로운 책 시작",
    emotions: ["흥미로움 😮", "기대됨 😊"],
    thoughts: "많은 추천을 받은 책을 시작했다. 많은 것을 배울 수 있길.",
    memo: "독서 모임에서 의견 공유 예정",
  },
  {
    id: 11,
    timestamp: 1708596000,
    situation: "새로운 프로젝트 시작",
    emotions: ["신남 🤩"],
    thoughts: "이번 프로젝트가 정말 기대된다. 잘 해낼 수 있을까?",
    memo: "내일 첫 회의",
  },
  {
    id: 12,
    timestamp: 1709307000,
    situation: "중요한 프레젠테이션",
    emotions: ["불안 😟", "걱정 😦"],
    thoughts: "",
    memo: "",
  },
  {
    id: 13,
    timestamp: 1710532800,
    situation: "오랜 친구와 재회",
    emotions: ["행복 😊"],
    thoughts: "정말 오랜만에 만난 친구라서 기분이 좋다.",
    memo: "",
  },
  {
    id: 14,
    timestamp: 1712754000,
    situation: "갑작스러운 비 소식",
    emotions: ["걱정 😦"],
    thoughts: "비가 와서 약속에 늦지 않을까 걱정된다.",
    memo: "우산을 챙겨 나갔다.",
  },
  {
    id: 15,
    timestamp: 1714933800,
    situation: "강아지와 산책",
    emotions: ["만족 😌", "기쁨 😁"],
    thoughts: "산책을 하니 마음이 편안해지고 기분이 좋아진다.",
    memo: "다음에도 시간을 내서 산책을 해야겠다.",
  },
];

const Home = () => {
  const noteList = noteEntries.slice();
  noteList.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  const rows = [];

  noteList.forEach((item) => {
    rows.push(
      <NoteItem
        timestamp={item.timestamp}
        situation={item.situation}
        emotions={item.emotions}
      />
    );
  });

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">{rows}</div>
        <MobileBottomBar />
      </div>
      <SideBar />
    </div>
  );
};

export default Home;
