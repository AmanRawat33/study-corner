import CourseList from "./CourseList";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import CourseDetails from "./CourseDetails";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <CourseList />,
    },
    {
      path: "/details",
      element: <CourseDetails />
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
