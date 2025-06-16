import React from "react";
import Navbar from "../Components/Navbar";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import { ThemeProvider } from "../Components/Context/ThemeContext";
const About = () => {
  return (
    <>
    <ThemeProvider>
      <div className="min-h-screen ">
        <Navbar />
        <div className="overflow-x-hidden">
          <AboutUs />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
    </>
  );
};

export default About;
