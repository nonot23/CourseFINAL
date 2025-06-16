import { createContext, useState } from "react";
import useSWR from "swr";
import axios from "axios";

interface Course {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  lectures: Lecture[];
}

interface Lecture {
  lectureTitle: string;
  totalDuration: string;
  videos: VideoDetails[];
}

interface VideoDetails {
  title: string;
  duration: string;
  video: string;
}

interface CourseContextType {
  courses: Course[] | undefined;
  isLoading: boolean;
  error: Error | null;
  fetchByCategory: (categoryName: string) => void;
  fetchBySearch: (keyword: string) => void;
}

export const CourseContext = createContext<CourseContextType>({
  courses: [],
  isLoading: true,
  error: null,
  fetchByCategory: () => {},
  fetchBySearch: () => {},
});

const fetcher = async (url: string) => axios.get(url).then((res) => res.data);



interface FetchCourseProps {
  children: React.ReactNode;
}

const FetchCourse: React.FC<FetchCourseProps> = ({ children }) => {
  const [apiUrl, setApiUrl] = useState(
    "https://mockapi-render.onrender.com/courses"
  );

  const { data, isLoading, error } = useSWR<Course[]>(apiUrl, fetcher);

  const fetchByCategory = (categoryName: string) => {
    if (!categoryName || categoryName === "คอร์สทั้งหมด") {
      setApiUrl("https://mockapi-render.onrender.com/courses");
    } else {
      setApiUrl(
        `https://mockapi-render.onrender.com/categories/${encodeURIComponent(
        categoryName
      )}/courses`
      );
    }
  };

  const fetchBySearch = (keyword: string) => {
    if (!keyword.trim()) {
      // ถ้า keyword ว่าง ให้โหลดคอร์สทั้งหมด
      setApiUrl("https://mockapi-render.onrender.com/courses");
    } else {
      setApiUrl(
        `https://mockapi-render.onrender.com/search?keyword=${encodeURIComponent(keyword)}`
      );
    }
  };
  return (
    <CourseContext.Provider
      value={{ courses: data, isLoading, error, fetchByCategory, fetchBySearch }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default FetchCourse;
