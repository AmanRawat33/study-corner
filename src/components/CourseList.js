import Header from "./Header";
import CourseCard from "./CourseCard";
import { courses } from "../utils/constants";
const CourseList = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between p-6">
        {courses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              name={course.name}
              instructor={course.instructor}
              status={course.enrollmentStatus}
              duration={course.duration}
              source={course.thumbnail}
            />
          );
        })}
      </div>
    </>
  );
};

export default CourseList;
