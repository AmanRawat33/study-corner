import { useState } from "react";

const CourseDetailCard = ({
  name,
  instructor,
  description,
  status,
  duration,
  schedule,
  location,
  prerequisites,
  syllabus,
  thumbnail,
}) => {
  const [openSyllabus, setOpenSyllabus] = useState(false);
  const handleSyllabusClick = () => {
    setOpenSyllabus(!openSyllabus);
  };
  return (
    <>
      <div className="p-5 bg-[#faf8f8] font-thin font-mono ">
        <div className="mx-auto w-[80%] md:w-[60%] border-2 p-5 bg-[#fbfefb] rounded-3xl shadow-2xl">
          <div className="w-[100%] ">
            <img
              src={thumbnail}
              className="mx-auto w-[50%] h-42 object-cover rounded-lg"
            />
          </div>
          <h1 className="text-[42px] font-bold text-center text-[#393d3f] font-mono">
            {name}
          </h1>
          <h3 className="text-2xl font-semibold text-center mb-2 text-[#212227] font-mono">
            Led by: {instructor}
          </h3>
          <p className="text-xl">{description}</p>
          <p className="text-xl">
            <span className="font-bold text-[#1b1b1e]">Status:</span> {status}
          </p>
          <p className="text-xl">
            <span className="font-bold text-[#1b1b1e]">Duration: </span>
            {duration}
          </p>
          <p className="text-xl">
            <span className="font-bold text-[#1b1b1e]">Schedule: </span>
            {schedule}
          </p>
          <p className="text-xl">
            <span className="font-semibold text-[#1b1b1e]">Mode: </span>
            {location}
          </p>
          <p className="text-xl">
            <span className="font-semibold text-[#1b1b1e]">
              Prerequisites:{" "}
            </span>
            {prerequisites.map((p) => {
              return (
                <ul>
                  <li>{p}</li>
                </ul>
              );
            })}
          </p>
          {openSyllabus ? (
            <p className="text-xl font-semibold">Syllabus:</p>
          ) : null}

          <p>
            {openSyllabus ? (
              <div>
                {syllabus.map((part) => {
                  return (
                    <div>
                      <h1 className="text-xl">
                        <span className="font-semibold">Week: </span>{" "}
                        {part.week}
                      </h1>
                      <ul>
                        <li className="text-xl list-inside list-disc">
                          {part.topic}
                        </li>
                        <li className="text-xl list-inside list-disc">
                          {part.content}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : (
              <button
                className="border-2 px-4 py-2 mt-2 text-lg hover:bg-black hover:text-white"
                onClick={handleSyllabusClick}
              >
                Show Syllabus
              </button>
            )}
          </p>
          {openSyllabus ? (
            <button
              className="border-2 px-4 py-2 mt-2 text-lg hover:bg-black hover:text-white"
              onClick={handleSyllabusClick}
            >
              Hide Syllabus
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CourseDetailCard;
