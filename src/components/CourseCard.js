const CourseCard = ({ name, instructor, status, duration, source }) => {
  return (
    <>
      <div className="flex flex-col mr-5 md:mr-4 p-5 border-2 cursor-pointer w-60 h-84 mb-4 bg-slate-200 rounded-lg font-mono">
        <div className="flex rounded-lg">
          <img src={source} alt="course-image" className="w-[100%] rounded-lg" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold h-16 mt-2">{name}</h1>
          <p>{instructor}</p>
          <p>{duration}</p>
          <p className="font-bold">{status}</p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
