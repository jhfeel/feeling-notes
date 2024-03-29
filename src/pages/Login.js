import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const { session, signInWithGoogle } = useContext(SessionContext);

  return (
    <div>
      {session ? (
        <Navigate to="/" />
      ) : (
        <button onClick={signInWithGoogle}>로그인</button>
      )}
    </div>
  );
};

export default Login;
