import CourseDetailCard from "./CourseDetailCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
const CourseDetails = ({ key }) => {
  const id = useSelector((store) => store?.details?.courseID);
  const courses = useSelector((store) => store?.courses);
  return (
    <>
      {courses?.map((course, idx) => {
        return (
          idx === id - 1 && (
            <CourseDetailCard
              key={key}
              name={course.name}
              instructor={course.instructor}
              description={course.description}
              status={course.enrollmentStatus}
              duration={course.duration}
              schedule={course.schedule}
              location={course.location}
              prerequisites={course.prerequisites}
              syllabus={course.syllabus}
              thumbnail={course.thumbnail}
            />
          )
        );
      })}
    </>
  );
};

export default CourseDetails;
