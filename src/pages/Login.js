import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";

export const Login = () => {
  const { session, signInWithGoogle, signOut } = useContext(SessionContext);

  return (
    <div>
      {session ? (
        <button onClick={signOut}>로그아웃</button>
      ) : (
        <button onClick={signInWithGoogle}>로그인</button>
      )}
    </div>
  );
};

export default Login;
