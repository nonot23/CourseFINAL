
import Navbar from "../Components/Navbar";
import CoursesDetail from "../Components/CoursesDetail";
import Footer from "../Components/Footer";
import { ThemeProvider } from "../Components/Context/ThemeContext";
const Course = () => {
  return (
    <>
    <ThemeProvider>
      <div className="min-h-screen ">
      <Navbar />
      <div className="overflow-x-hidden">
        <CoursesDetail />
        <Footer />
      </div>
      </div>
    </ThemeProvider>
    </>
  );
};

export default Course;