import { useContext, useEffect, useState } from "react";
import SessionContext from "../contexts/SessionContext";
import { Navigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Header from "../components/Header";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";

export const Login = ({ userNotes }) => {
  const { session, signInWithEmail, signInWithGoogle } =
    useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <div className="email-login-box">
              <input
                className="login-input"
                name="email"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="login-input"
                name="password"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="login-btn clickable"
                onClick={() => signInWithEmail(email, password)}
              >
                로그인
              </button>
              <div>
                <span className="clickable login-additional-link">
                  비밀번호 찾기
                </span>
                <span className="login-additional-link"> | </span>
                <span className="clickable login-additional-link">
                  회원가입하기
                </span>
              </div>
            </div>
            <button
              className="login-btn google-login-btn clickable"
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
