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
        console.log(event, session);
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

    if (error) console.error("회원가입 중 에러: ", error.message);
  };

  const signInWithEmail = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) console.error("이메일 로그인 에러: ", error.message);
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

  return (
    <SessionContext.Provider
      value={{
        session,
        signUpNewUser,
        signInWithEmail,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
