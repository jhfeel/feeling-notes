import { useContext, useState } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";
import SessionContext from "../contexts/SessionContext";

const FindPassword = ({ userNotes }) => {
  const [email, setEmail] = useState("");
  const { sendPasswordResetEmail } = useContext(SessionContext);

  const onSendBtnClick = async () => {
    if (window.confirm("이메일로 비밀번호 변경 링크를 보내시겠습니까?")) {
      try {
        sendPasswordResetEmail(email);
      } catch (error) {
        console.error("Unexpected error: ", error);
        alert("예기치 않은 에러가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">
          <div className="login-container">
            <h4>비밀번호 변경 링크 보내기</h4>
            <div className="email-login-box">
              <input
                className="login-input"
                name="email"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="login-btn clickable" onClick={onSendBtnClick}>
                전송
              </button>
            </div>
          </div>
        </div>
        <MobileBottomBar />
      </div>
      <SideBar userNotes={userNotes} />
    </div>
  );
};

export default FindPassword;
