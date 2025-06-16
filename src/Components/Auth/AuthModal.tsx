import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const AuthModal = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true); // เริ่มต้นที่ Login หรือ Signup ได้ตามต้องการ

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