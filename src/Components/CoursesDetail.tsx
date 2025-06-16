import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "./Context/FetchCourse";

const CourseDetail = () => {
  const { id } = useParams();
  const { courses = [],  isLoading, error } = useContext(CourseContext);
  
  const course = courses?.find((course) => course.id === Number(id));
  const lecture = course?.lectures[0];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const currentVideo = lecture?.videos[currentVideoIndex];

  
 const [completedVideoIndices, setCompletedVideoIndices] = useState<Set<number>>(() => {
    const saved = localStorage.getItem(`completed-video-id-${id}`);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

useEffect(() => {
  if (!id) return;
  const saved = localStorage.getItem(`completed-video-id-${id}`);
  if (saved) {
    setCompletedVideoIndices(new Set(JSON.parse(saved)));
  }
}, [id, courses]);

useEffect(() => {
  localStorage.setItem(`completed-video-id-${id}`, JSON.stringify(Array.from(completedVideoIndices)));
}, [completedVideoIndices, id]);


useEffect(() => {
  if (currentVideoIndex >= 0 && lecture?.videos[currentVideoIndex]) {
    setCompletedVideoIndices((prev: Set<number>) => {
      if (prev.has(currentVideoIndex)) return prev;
      const newSet = new Set(prev);
      newSet.add(currentVideoIndex);
      return newSet;
    });
  }
}, [currentVideoIndex, lecture]);

  // Function สำหรับจัดการการคลิกวิดีโอ
const handleVideoClick = (index: number) => {
  setCompletedVideoIndices((prev) => {
    const newSet = new Set(prev);
    newSet.add(index); //  ทำเครื่องหมายว่าดูจบทันทีที่คลิก
    return newSet;
  });

  setCurrentVideoIndex(index);
};

  if (!course) return <div className="text-center mt-10">Course not found</div>;

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

  return (
    <div className="dark:bg-gray-900">
    <div className="container mx-auto p-10 xl:p-24 font-kanit ">
      <div className="flex flex-col  xl:flex-row justify-between space-y-10 xl:space-y-0 xl:space-x-10">
      <div className="w-full max-w-3xl bg-gray-200 p-6 rounded-lg shadow-lg space-y-5">
        <iframe
          src={currentVideo?.video}
          className="w-full md:h-[300px] lg:h-96"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h1 className="text-[20px] font-bold mb-4">{currentVideo?.title}</h1>
          
      </div>
      
      <div className="dropdown dropdown-open justify-end ">
        <div tabIndex={0} role="button" className="btn h-auto w-full  p-6 flex flex-col items-start ">
          <h2 className="text-lg ">
            {lecture?.lectureTitle}
          </h2>
          <button className="btn btn-primary mt-2">
            {lecture?.totalDuration}
          </button>
          
        </div>
        
       <div className="w-full  bg-white p-4 rounded shadow-md ">
        
          <ul className="space-y-2">
            {lecture?.videos.map((video, index) => (
              <li
                key={index}
                onClick={() => handleVideoClick(index)}
                className={`cursor-pointer p-3 rounded transition ${
                  currentVideoIndex === index ? "bg-blue-100" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="font-medium flex items-center">
                    {/* แสดงเครื่องหมายถูกถ้า video index อยู่ใน Set ของวิดีโอที่ดูจบแล้ว */}
                    {completedVideoIndices.has(index) && (
                      <span className="text-green-500 mr-2">✔</span>
                    )}
                    {video.title}
                  </div>
                <div className="text-sm text-gray-500">{video.duration}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CourseDetail;
