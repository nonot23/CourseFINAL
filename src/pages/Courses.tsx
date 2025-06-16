
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AllCourses from "../Components/AllCourses";
import Footer from "../Components/Footer";
import { ThemeProvider } from "../Components/Context/ThemeContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Courses = () => {
  const query = useQuery();
  const searchFromQuery = query.get("search") || "";

  return (
    <ThemeProvider>
    <div className="min-h-screen">
      <Navbar />
      <div className="overflow-x-hidden">
        <AllCourses searchTerm={searchFromQuery} />
        <Footer />
      </div>
    </div>
    </ThemeProvider>
  );
};

export default Courses;
