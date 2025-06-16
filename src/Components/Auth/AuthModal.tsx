import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const AuthModal = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <>
      {isLogin ? (
        <Login
          onClose={onClose}
          onSwitchToSignup={() => setIsLogin(false)}
        />
      ) : (
        <Signup
          onClose={onClose}
          onSwitchToLogin={() => setIsLogin(true)}
        />
      )}
    </>
  );
};

export default AuthModal;