import React from "react";
import { Outlet, createBrowserRouter, RouterProvider }
  from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Academic from "./pages/Academic";
import RecruitmentProcedure from "./pages/RecruitmentProcedure";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div className="pb-16">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    ),
    errorElement: (<Error />),
    children: [
      {
        path: "/",
        element: (<Home />),
      },
      {
        path: "/academics",
        element: (<Academic />),
      },
      {
        path: "/process",
        element: (<RecruitmentProcedure />),
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;