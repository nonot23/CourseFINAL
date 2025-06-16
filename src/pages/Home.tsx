
import Navbar from "../Components/Navbar";
import Hero_Section from "../Components/Hero_Section";
import Footer from "../Components/Footer";
import Tabbar from "../Components/Tabbar";
import MainCourse from "../Components/MainCourse";
import MainContent from "../Components/MainContent";
import { ThemeProvider } from "../Components/Context/ThemeContext";
const Home = () => {
  return (
    <>
    <ThemeProvider>
      <div className="min-h-screen ">
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero_Section />
        <Tabbar />
        <MainCourse />
        <MainContent />
        <Footer />
      </div>
      </div>
    </ThemeProvider>
    </>
  );
};

export default Home;
