import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import SessionContext from "./SessionContext";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        // console.log("event: ", event, ", session: ", session);
        if (event === "SIGNED_OUT") {
          setSession(null);
        } else if (session) {
          setSession(session);
        }
      }
    );

    return () => authListener.unsubscribe();
  }, []);

  const signUpNewUser = async (email, password) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("회원가입 중 에러: ", error.message);
      if (error.message === "User already registered") {
        alert("이미 등록된 계정입니다.");
      }
    }
  };

  const signInWithEmail = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("이메일 로그인 에러: ", error.message);
      if (!email || !password) {
        alert("이메일과 비밀번호를 모두 입력해 주세요.");
      } else if (error.message === "Invalid login credentials") {
        alert("일치하는 회원 정보가 없습니다.");
      } else {
        alert(`로그인 에러: ${error.message}`);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.REACT_APP_URL + "/login",
      },
    });

    if (error) console.error("구글 로그인 에러: ", error.message);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.error("로그아웃 에러: ", error.message);
  };

  const sendPasswordResetEmail = async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: process.env.REACT_APP_URL + "/update-password",
    });

    if (error) {
      alert(`전송 중 오류: ${error.message}`);
    } else {
      alert("비밀번호 변경 링크를 전송했습니다.");
    }
  };

  const updatePassword = async (password) => {
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      console.error("비밀번호 변경 중 에러: ", error.message);
      if (
        error.message ===
        "New password should be different from the old password."
      ) {
        alert("이전과 다른 비밀번호를 설정해 주세요.");
      } else {
        alert(`비밀번호 변경 중 에러: ${error.message}`);
      }
      return false;
    } else {
      alert("비밀번호가 변경되었습니다.");
      return true;
    }
  };

  const setUserSession = async (accessToken, refreshToken) => {
    const { error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    if (error) {
      console.error("setSession 에러: ", error.message);
    }
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        signUpNewUser,
        signInWithEmail,
        signInWithGoogle,
        signOut,
        sendPasswordResetEmail,
        updatePassword,
        setUserSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
