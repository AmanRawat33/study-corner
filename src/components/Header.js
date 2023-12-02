import { useDispatch, useSelector } from "react-redux";
import { toggleDashboardView } from "../utils/dashboardSlice";
import { useEffect } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const showDashboard = useSelector(store => store.dashboard.showDashboard);
  const handleDashboardClick = () => {
    dispatch(toggleDashboardView(showDashboard));
  };
  return (
    <>
      <header>
        <div className="flex justify-between p-6 bg-slate-500">
          <h1 className="text-white font-semibold text-3xl">StudyCorner</h1>
          <button
            className="text-black font-semibold text-lg bg-slate-100 px-4 py-2 rounded-md"
            onClick={handleDashboardClick}
          >
            {showDashboard ? "Course List" : "My Dashboard"}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
