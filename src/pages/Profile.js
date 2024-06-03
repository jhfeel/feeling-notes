import { useContext, useEffect } from "react";
import SessionContext from "../contexts/SessionContext";
import MenuBar from "../components/MenuBar";
import Header from "../components/Header";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";

const Profile = ({ userNotes }) => {
  const { session, sendPasswordResetEmail, signOut } =
    useContext(SessionContext);

  const onUpdatePasswordClick = async () => {
    const email = session.user.email;

    if (window.confirm("이메일로 비밀번호 변경 링크를 보내시겠습니까?")) {
      try {
        sendPasswordResetEmail(email);
      } catch (error) {
        console.error("Unexpected error: ", error);
        alert("예기치 않은 에러가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = "Feeling Notes - 내 프로필";
  }, []);

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">
          <div className="profile-container">
            <h4>프로필</h4>
            <div>E-mail: {session.user.email}</div>
            <div className="profile-btn-container">
              <button onClick={onUpdatePasswordClick}>비밀번호 변경</button>
              <button onClick={signOut}>로그아웃</button>
            </div>
          </div>
        </div>
        <MobileBottomBar />
      </div>
      <SideBar userNotes={userNotes} />
    </div>
  );
};
export default Profile;
