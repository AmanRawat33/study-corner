import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating progress with a timer
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        return newProgress <= 60 ? newProgress : 60;
      });
    }, 100); // Updation time

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Progress Bar</h2>
      <div className="w-48 border-solid rounded-sm overflow-hidden">
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#8ecae6",
            height: "20px",
            transition: "width 0.5s",
          }}
        />
      </div>
      <p>{`${progress}% Complete`}</p>
    </div>
  );
};

export default ProgressBar;
