/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext, useEffect } from "react";
import { CourseContext } from "./Context/FetchCourse";
import axios from "axios";
import LoginRequiredModal from "./Modal/LoginRequiredModal";
import { useAuth } from "./Context/AuthCourse";
import { useNavigate } from "react-router-dom";

type Category = string;

const AllCourses: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const {
    courses = [],
    isLoading,
    error,
    fetchByCategory,
  } = useContext(CourseContext);
  const [selected, setSelected] = useState("คอร์สทั้งหมด");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [targetLink, setTargetLink] = useState<string | null>(null);
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const handleViewCourse = (courseId: string | number, courseName: string) => {
    const link = `/course/${courseId}/${slugify(courseName)}`;
    if (isAuthenticated) {
      navigate(link);
    } else {
      setTargetLink(link);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTargetLink(null);
  };

  const handleClearFilter = () => {
    setSelected("คอร์สทั้งหมด");
    fetchByCategory("คอร์สทั้งหมด");
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://mockapi-render.onrender.com/categories"
        );
        setCategories(response.data);
        console.log("Fetched categories:", response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setSelected(selectedCategory);
    fetchByCategory(selectedCategory);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center text-center h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error.message}
      </div>
    );
  }
  // Filter courses based on selected category
  const visibleCourses =
    selected === "คอร์สทั้งหมด"
      ? courses
      : courses.filter((course: any) => course.category === selected);

  return (
    <>
      <div className="font-kanit dark:bg-gray-900 ">
        <div className="container mx-auto p-8">
          <h1 className="text-2xl font-bold mb-4 text-[var(--color-primary)] ">
            {selected === "คอร์สทั้งหมด" ? "คอร์สทั้งหมด" : `${selected}`}
          </h1>
          <div className="w-full md:w-64">
            <div className="md:flex justify-between items-center ">
              <select
                className="select w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                value={selected}
                onChange={handleChange}
              >
                <option value="คอร์สทั้งหมด">หมวดหมู่ทั้งหมด</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="flex mx-1">
              <button
                onClick={handleClearFilter}
                className="btn btn-md bg-gray-300 hover:bg-gray-400 text-black mt-2 md:mt-0  "
              >
                ล้างการค้นหา
              </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-2 md:gap-10 lg:gap-2 xl:gap-10  transition-all duration-800 ease-out mt-8">
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="card  bg-base-200 shadow-xl p-1"
              >
                <figure>
                  <img
                    src={course.image}
                    alt={course.name}
                    className="h-[100px] md:h-[300px] xl:h-[220px] w-full object-cover "
                  />
                </figure>
                <div className="card-body p-1 md:p-5">
                  <h2 className="card-title  text-md md:text-lg">
                    {course.name}
                  </h2>
                  <p className="line-clamp-2 xl:line-clamp-none text-sm">
                    {course.description}
                  </p>
                  <div className="card-actions justify-end mt-2">
                    <button
                      onClick={() => handleViewCourse(course.id, course.name)}
                      className="btn btn-sm btn-primary mx-auto xl:mx-0"
                    >
                      กดเพื่อดู
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showModal && <LoginRequiredModal onClose={handleCloseModal} />}
      </div>
    </>
  );
};

export default AllCourses;
