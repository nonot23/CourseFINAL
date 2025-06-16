
import { useContext, useState,useEffect } from "react";
import { CourseContext } from "../Components/Context/FetchCourse";

import { useAuth } from "./Context/AuthCourse";
import { useNavigate } from "react-router-dom";
import LoginRequiredModal from "./Modal/LoginRequiredModal";


const MainCourse = () => {
  const { courses = [], isLoading, error } = useContext(CourseContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const { isAuthenticated } = useAuth();
  
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1300) {
      setItemsPerPage(4); // 2xl ขึ้นไป
    } else if (width >= 768) {
      setItemsPerPage(3); // md ขึ้นไป
    } else {
      setItemsPerPage(2); // จอเล็ก
    }
  };

  updateItemsPerPage(); // เรียกครั้งแรก
  window.addEventListener("resize", updateItemsPerPage);

  return () => window.removeEventListener("resize", updateItemsPerPage);
}, []);
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-auto">
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

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleCourses = courses.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  const handleViewCourse = (courseId: string | number, courseName: string) => {

    const link = `/course/${courseId}/${slugify(courseName)}`;
    if (isAuthenticated) {
      navigate(link);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);

  };
  return (
    <main className=" dark:bg-gray-800 py-8 font-kanit">
      <div className="container mx-auto p-8">
        <h1 className="text-center dark:text-white text-[var(--color-primary)] font-kanit font-bold text-2xl xl:text-3xl m-10">
          คอร์สเรียนออนไลน์ทั้งหมด
        </h1>

        <div className="relative mt-8 ">
          {/* ปุ่มเลื่อน */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button className="btn btn-circle" onClick={handlePrev}>
              ❮
            </button>
          </div>
          
          <div>
          <div className="inline-grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-4 gap-2 md:gap-10 lg:gap-10 xl:gap-x-76  2xl:gap-8  transition-all duration-800 ease-out ">
            {visibleCourses.map((course) => (
              <div key={course.id} className="card  md:min-w-[210px] lg:min-w-[280px] xl:min-w-[300px] 2xl:min-w-[350px] p-1 bg-base-200 shadow-md ">
                <figure>
                  <img
                    src={course.image}
                    alt={course.name}
                    className="h-[100px] md:h-[160px] xl:h-[200px] w-full  object-cover"
                  />
                </figure>
                <div className="card-body p-1 md:p-5">
                  <h2 className="card-title  text-md md:text-lg">
                    {course.name}
                  </h2>
                  <p className="line-clamp-2 xl:line-clamp-none text-sm">{course.description}</p>
                  <div className="card-actions justify-end mt-2">
                    <button
                      onClick={() => handleViewCourse(course.id, course.name) }
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
          

          <div className="absolute  -right-4 top-1/2 -translate-y-1/2 z-10">
            <button className="btn btn-circle" onClick={handleNext}>
              ❯
            </button>
          </div>
        </div>
        {showModal && <LoginRequiredModal onClose={handleCloseModal} />}
      </div>
    </main>
  );
};

export default MainCourse;
