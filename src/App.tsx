import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import "./App.css";
import FetchCourse from "./Components/Context/FetchCourse";
import Courses from "./pages/Courses";
function App() {
  return (
    <FetchCourse>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/course/:id/:slug" 
            element={
              <PrivateRoute>
                <Course />
              </PrivateRoute>
            } 
          />
          <Route path="/Course" element={<Courses />}/>
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </FetchCourse>
  );
}

export default App;
