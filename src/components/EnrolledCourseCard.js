import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const EnrolledCourseCard = ({ name, instructor, status, duration, source }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [futureDate, setFutureDate] = useState(new Date());

  useEffect(() => {
    // Get current date
    const currentDateObj = new Date();
    setCurrentDate(currentDateObj?.toLocaleString());

    // Calculate future date
    const futureDateObj = new Date(currentDateObj);
    futureDateObj.setDate(currentDateObj?.getDate() + 56);
    setFutureDate(futureDateObj?.toLocaleString());
  }, []);
  return (
    <>
      <div className="mx-auto p-5 border-2 cursor-pointer w-[50%] h-auto mb-4 bg-slate-200 rounded-lg">
        <div className="rounded-lg mx-auto">
          <img
            src={source}
            alt="course-image"
            className="w-[50%] rounded-lg mx-auto"
          />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold h-auto mt-2 mb-2">{name}</h1>
          <p className="font-semibold">Led by: {instructor}</p>
          <p className="font-semibold">Duration: {duration}</p>
          <p className="font-semibold">
            Due Date: {futureDate.toLocaleString()}
          </p>
          <p className="font-bold">{status}</p>
          <ProgressBar />
          
        </div>
      </div>
    </>
  );
};

export default EnrolledCourseCard;
