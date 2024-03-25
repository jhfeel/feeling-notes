import { useState } from "react";
import { UserContext } from "./UserContext";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkLogin = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) console.error("세션 확인 중 에러: ", error.message);

    if (data.session === null) {
      setUser(null);
    } else {
      setUser(data.session.user);
    }
  };

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

  return (
    <UserContext.Provider
      value={{ user, setUser, checkLogin, signInWithGoogle, signOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
