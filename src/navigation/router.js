import {Tabs} from "../components/Tabs/Tabs";
import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/MainPage/MainPage";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:tabId",
        element: <Tabs />,
      }
    ]
  },
]);
