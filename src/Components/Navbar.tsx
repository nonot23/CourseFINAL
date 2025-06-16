/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useContext } from "react";
import { SiCoursera } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { AuthCourse, useAuth } from "./Context/AuthCourse";
import { Link as ScrollLink } from "react-scroll";
import { CourseContext } from "./Context/FetchCourse";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./Context/ThemeContext";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseNames, setCourseNames] = useState<string[]>([]);
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const { fetchBySearch } = useContext(CourseContext);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          "https://mockapi-render.onrender.com/courses"
        );
        const names = res.data.map((course: any) => course.name);
        setCourseNames(names);
      } catch (err) {
        console.error("Error fetching course names", err);
      }
    };
    fetchCourses();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setSearchTerm(val);
    if (val.trim() !== "") {
      const matches = courseNames.filter((name) =>
        name.toLowerCase().includes(val.toLowerCase())
      );
      setFilteredResults(matches);
    } else {
      setFilteredResults([]);
    }
  };

  const handleSelectName = (name: string) => {
    fetchBySearch(name);
    navigate(`/Course?search=${encodeURIComponent(name)}`);
    setSearchTerm("");
    setFilteredResults([]);
    setIsOpen(false); // ปิดเมนู mobile ถ้ามี
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchTerm.trim() !== "") {
        navigate(`/Course?search=${encodeURIComponent(searchTerm.trim())}`);
        setIsOpen(false); // ปิดเมนู mobile ถ้ามี
      } else {
        navigate("/Course");
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1366) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <motion.nav
        className="bg-white dark:bg-gray-900 dark:text-white shadow-md font-bold font-roboto sticky top-0 z-50"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto flex flex-col xl:flex-row items-center  p-4 ">
          <div className="flex px-4 items-center gap-2 text-[20px] xl:text-2xl text-[var(--color-primary)]   w-full xl:w-auto">
            <div className="flex items-center gap-2 ">
              <SiCoursera className="text-[32px] xl:text-[25px]" />
              <h1 className="text-[25px] whitespace-nowrap">Online Course</h1>
            </div>
            <button
              className="btn btn-ghost bg-[var(--color-secondary)]  xl:hidden flex  items-center justify-end ml-auto"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoMdMenu className="text-[30px] text-black " />
            </button>
          </div>

          <div
            className={`w-full mt-4 xl:mt-0 ${
              isOpen ? "block" : "hidden"
            } xl:flex xl:justify-between mx-auto`}
          >
            <div className="mx-auto">
              <label
                className={`input w-full  xl:min-w-[350px] 2xl:w-auto   my-5 xl:my-0   `}
              >
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  required
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                  className="dark:text-black"
                />
              </label>
              {filteredResults.length > 0 && (
                <ul className="absolute bg-white dark:text-black border w-full mt-1 z-50 rounded shadow max-h-60 overflow-y-auto">
                  {filteredResults.map((name, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleSelectName(name)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <ul className="flex flex-col text-[15px] xl:text-[17px] mx-auto xl:flex-row gap-4 xl:gap-8 mt-5 xl:mt-0 items-center">
              <Link to="/">Home</Link>
              <div className="w-full border-t border-gray-300 my-5 block xl:hidden"></div>
              <Link
                to="/Course"
                className="text-[var(--color-primary)] hover:text-[var(--color-hover)]"
              >
                Course
              </Link>
              <div className="w-full border-t border-gray-300 my-5 block xl:hidden"></div>
              <ScrollLink
                to="Contact"
                smooth={true}
                duration={500}
                className="cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </ScrollLink>
              <div className="w-full border-t border-gray-300 my-5 block xl:hidden"></div>
              <Link to="/About" className="whitespace-nowrap">
                About Us
              </Link>
            </ul>
            <div className="w-full border-t border-gray-300 my-5 block xl:hidden "></div>
            <div className="flex flex-col xl:flex-row my-8 xl:my-0 ml-auto">
              <div className="flex flex-col xl:flex-row gap-4 ">
                {isAuthenticated ? (
                  <div className="flex items-center  gap-4 mx-auto xl:ml-0">
                    <span className="text-sm text-gray-700 whitespace-nowrap">
                      👤 {user}
                    </span>
                    <button
                      className="btn bg-red-500 text-white hover:bg-red-600"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-4 items-center justify-center xl:justify-end w-full">
                    <button
                      className="btn"
                      onClick={() => setShowLoginModal(true)}
                    >
                      Login
                    </button>
                    <button
                      className="btn bg-[var(--color-primary)] text-white hover:bg-[var(--color-hover)]"
                      onClick={() => setShowSignupModal(true)}
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
              <div className="flex gap-2 items-center">
                <button
                  onClick={toggleTheme}
                  className="mt-5 mx-auto xl:mt-0 xl:ml-4 text-sm hover:cursor-pointer "
                >
                  {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <AuthCourse>
        {showLoginModal && (
          <Login
            onClose={() => setShowLoginModal(false)}
            onSwitchToSignup={() => {
              setShowLoginModal(false);
              setShowSignupModal(true);
            }}
          />
        )}

        {showSignupModal && (
          <Signup
            onClose={() => setShowSignupModal(false)}
            onSwitchToLogin={() => {
              setShowSignupModal(false);
              setShowLoginModal(true);
            }}
          />
        )}
      </AuthCourse>
    </>
  );
};

export default Navbar;
