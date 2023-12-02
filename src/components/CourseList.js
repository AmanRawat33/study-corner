import Header from "./Header";
import CourseCard from "./CourseCard";
import Dashboard from "./Dashboard";
import { courses } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCourses } from "../utils/courseSlice";
import { useEffect, useState } from "react";
import { addCourseID, toggleDetailsView } from "../utils/detailSlice";
import { useNavigate } from "react-router-dom";
const filterData = (searchText, displayCourses) => {
  return displayCourses.filter(
    (course) =>
      course?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      course?.instructor?.toLowerCase().includes(searchText.toLowerCase())
  );
};
const CourseList = () => {
  const [searchText, setSearchText] = useState("");
  const [displayCourses, setDisplayCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showDashboard = useSelector((store) => store.dashboard.showDashboard);
  const allCourses = useSelector((store) => store.courses);
  const getAllCourses = () => {
    const data = allCourses;
    dispatch(addCourses(courses));
    setDisplayCourses(courses);
    setFilteredCourses(courses);
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
        <div>
          <div className="pl-6 pt-4">
            <input
              type="text"
              placeholder="Search by course/instructor name"
              className="px-4 py-2 outline-none border-2 mr-2 w-72"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-black text-white border-2"
              onClick={() => {
                const crs = filterData(searchText, displayCourses);
                setFilteredCourses(crs);
              }}
            >
              Search
            </button>
          </div>
          <p className="pl-6 mt-2 text-lg font-semibold">
            Doube click on any course to see its details
          </p>
          <div className="p-6 flex flex-wrap justify-center md:justify-start">
            {filteredCourses?.map((course, idx) => {
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
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default CourseList;
