import { useContext, useEffect, useState } from "react";
import SessionContext from "../contexts/SessionContext";
import { Navigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Header from "../components/Header";
import MobileBottomBar from "../components/MobileBottomBar";
import SideBar from "../components/SideBar";

const SignUp = ({ userNotes }) => {
  const { session, signUpNewUser } = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = "Feeling Notes - 회원가입";
  }, []);

  const isPasswordValid = (password) => {
    const minLength = 8;
    const maxLength = 15;
    const hasLetter = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),./?'":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      password.length <= maxLength &&
      hasLetter &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const isPasswordMatching = () => {
    if (confirmPassword.length === 0) {
      return true;
    }
    return confirmPassword === password;
  };

  const onSignUpClick = () => {
    if (!isPasswordValid(password) || !isPasswordMatching()) {
      alert("비밀번호를 다시 입력해 주세요.");
    } else {
      signUpNewUser(email, password);
    }
  };

  return session ? (
    <Navigate to="/" />
  ) : (
    <div className="container">
      <MenuBar />
      <div className="main">
        <Header />
        <div className="contents-container">
          <div className="login-container">
            <h4>회원가입</h4>

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
              <div className="password-check">
                {isPasswordValid(password)
                  ? ""
                  : "영문, 숫자, 특수문자를 포함해 8~15자로 입력해 주세요."}
              </div>
              <input
                className="login-input"
                name="password"
                type="password"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="password-check">
                {isPasswordMatching() ? "" : "비밀번호가 일치하지 않습니다"}
              </div>
              <button className="login-btn clickable" onClick={onSignUpClick}>
                회원가입
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

export default SignUp;
