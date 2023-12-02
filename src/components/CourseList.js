import Header from "./Header";
import CourseCard from "./CourseCard";
import Dashboard from "./Dashboard";
import { courses } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCourses } from "../utils/courseSlice";
import { useEffect } from "react";
import { addCourseID, toggleDetailsView } from "../utils/detailSlice";
import { useNavigate } from "react-router-dom";
const CourseList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showDashboard = useSelector((store) => store.dashboard.showDashboard);
  const allCourses = useSelector((store) => store.courses);
  const getAllCourses = () => {
    const data = allCourses;
    dispatch(addCourses(courses));
  };
  useEffect(() => {
    getAllCourses();
  }, []);
  const showDetails = useSelector((store) => store?.details?.showDetails);
  const courseID = useSelector((store) => store?.details?.courseID);
  const handleCourseClick = (key) => {
    dispatch(toggleDetailsView(showDetails));
    dispatch(addCourseID(key));
    if (showDetails) {
      navigate("/details");
    }
    console.log(showDetails);
    console.log(courseID);
  };

  return (
    <>
      <Header />
      {!showDashboard ? (
        <div className="flex flex-wrap justify-between p-6">
          {courses?.map((course, idx) => {
            return (
              <div key={course.id} onClick={() => handleCourseClick(idx + 1)}>
                <CourseCard
                  key={course.id}
                  name={course.name}
                  instructor={course.instructor}
                  status={course.enrollmentStatus}
                  duration={course.duration}
                  source={course.thumbnail}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default CourseList;
