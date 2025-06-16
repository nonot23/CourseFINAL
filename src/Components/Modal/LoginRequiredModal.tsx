
import { Link } from "react-router-dom";

interface Props {
  onClose: () => void;
}

export default function LoginRequiredModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center font-kanit transition-opacity duration-500 ease-in-out">
      <div className="bg-white/90 border-0 p-6 rounded-lg text-center max-w-sm w-full shadow-lg">
        <h2 className="text-lg font-bold text-red-500 mb-4">โปรดล็อคอินก่อน</h2>
        <p className="mb-4 text-black">กรุณาล็อคอินก่อนดูคอร์สเรียน</p>
        <Link to="/" onClick={onClose}>
          <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-tab)] transition-colors duration-300">
            Close
          </button>
        </Link>
      </div>
    </div>
  );
}