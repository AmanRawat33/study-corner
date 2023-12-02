import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  useEffect(() => {
    // Simulating progress with a timer
    const intervalId = setInterval(() => {
      setProgress(isCheckboxChecked ? 100 : Math.min(progress+10, 60));
    }, 100); // Updation time

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [isCheckboxChecked, progress]);
  const handleCheckboxChange = () => {
    setIsCheckboxChecked((prev) => !prev);
  };
  return (
    <div>
      <h2>Progress Bar</h2>
      <label>
        <span>Mark as completed: </span>
        <input
          type="checkbox"
          checked={isCheckboxChecked}
          onChange={handleCheckboxChange}
        />
      </label>
      <div className="w-48 border-solid rounded-sm overflow-hidden">
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "green",
            height: "15px",
            transition: "width 1s",
            borderRadius:"5px"
          }}
        />
      </div>
      <p>{`${progress}% Complete`}</p>
    </div>
  );
};

export default ProgressBar;
