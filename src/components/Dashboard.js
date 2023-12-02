import EnrolledCourseCard from "./EnrolledCourseCard"
import { useDispatch, useSelector } from "react-redux"
const Dashboard = () => {
  const courses = useSelector(store => store.courses);
  return (
    <>
      <h1 className="text-3xl font-bold p-5">Courses enrolled by you</h1>
      <div className="flex flex-wrap">
        {courses?.map((course) => {
          return course.enrollmentStatus === "In Progress" ? (
            <EnrolledCourseCard
              key={course.id}
              name={course.name}
              instructor={course.instructor}
              status={course.enrollmentStatus}
              duration={course.duration}
              source={course.thumbnail}
            />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Dashboard
