import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";
import { Navigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Header from "../components/Header";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";

const Profile = ({ userNotes }) => {
  const { session, signOut } = useContext(SessionContext);

  return (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">
          <div className="profile-container">
            <h4>프로필</h4>
            <div>E-mail: {session.user.email}</div>
            <button onClick={signOut}>로그아웃</button>
          </div>
        </div>
        <MobileBottomBar />
      </div>
      <SideBar userNotes={userNotes} />
    </div>
  );
};
export default Profile;
