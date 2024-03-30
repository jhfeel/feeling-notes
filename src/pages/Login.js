import { useContext, useEffect } from "react";
import SessionContext from "../contexts/SessionContext";
import { Navigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Header from "../components/Header";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";

export const Login = ({ userNotes }) => {
  const { session, signInWithGoogle } = useContext(SessionContext);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = "Feeling Notes - 로그인";
  }, []);

  return session ? (
    <Navigate to="/" />
  ) : (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">
          <div className="login-container">
            <h4>로그인하기</h4>
            <button
              className="google-login clickable"
              onClick={signInWithGoogle}
            >
              <img
                src="/assets/google_logo.png"
                alt="google logo"
                className="google-logo"
              />
              Google로 시작하기
            </button>
          </div>
        </div>
        <MobileBottomBar />
      </div>
      <SideBar userNotes={userNotes} />
    </div>
  );
};

export default Login;
