import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    checkLogin();
  }, []);

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) console.error("로그인 에러: ", error.message);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("로그아웃 에러: ", error.message);

    checkLogin();
  };

  const checkLogin = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) console.error("세션 확인 중 에러: ", error.message);

    if (data.session === null) {
      setIsLoggedIn(false);
      setUserId(null);
    } else {
      setIsLoggedIn(true);
      setUserId(data.session.user.id);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={signOut}>로그아웃</button>
      ) : (
        <button onClick={signInWithGoogle}>로그인</button>
      )}
    </div>
  );
};

export default Login;
