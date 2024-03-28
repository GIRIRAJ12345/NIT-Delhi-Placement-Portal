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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
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