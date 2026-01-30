import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppLayout } from "./components/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Vision } from "./pages/Vision";
import { Education } from "./pages/Education";
import { Research } from "./pages/Research";
import { Teaching } from "./pages/Teaching";
import { Mentor } from "./pages/Mentor";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { InternShip } from "./pages/Internship";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/vision",
          element: <Vision />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/research",
          element: <Research />,
        },
        {
          path: "/teaching",
          element: <Teaching />,
        },
        {
          path: "/mentorship",
          element: <Mentor />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/internship",
          element: <InternShip />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
