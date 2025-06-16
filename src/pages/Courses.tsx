
import Navbar from "../Components/Navbar";
import AllCourses from "../Components/AllCourses";
import Footer from "../Components/Footer";
import { ThemeProvider } from "../Components/Context/ThemeContext";



const Courses = () => {


  return (
    <ThemeProvider>
    <div className="min-h-screen">
      <Navbar />
      <div className="overflow-x-hidden">
        <AllCourses />
        <Footer />
      </div>
    </div>
    </ThemeProvider>
  );
};

export default Courses;
