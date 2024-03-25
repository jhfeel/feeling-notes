import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";

export const Login = () => {
  const { user, signInWithGoogle, signOut, checkLogin } =
    useContext(UserContext);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    <div>
      {user ? (
        <button onClick={signOut}>로그아웃</button>
      ) : (
        <button onClick={signInWithGoogle}>로그인</button>
      )}
    </div>
  );
};

export default Login;
