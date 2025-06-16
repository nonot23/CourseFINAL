import { useAuth } from "../Context/AuthCourse";
import LoginRequiredModal from "../Modal/LoginRequiredModal";
import { useState, useEffect } from "react";

export default function PrivateRoute({ children }: { children: React.ReactElement }) {
  const { isAuthenticated } = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      setShowModal(false); // เมื่อ login แล้ว ปิด modal อัตโนมัติ
    }
  }, [isAuthenticated]);

  if (!isAuthenticated && showModal) {
    return (
      <LoginRequiredModal
        onClose={() => setShowModal(false)} // ปิด modal อย่างเดียว ไม่ต้อง redirect
      />
    );
  }

  return children;
}