import CourseList from "./pagecomponents/CourseList";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import CourseDetails from "./pagecomponents/CourseDetails";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/details",
      element: <DetailsPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
