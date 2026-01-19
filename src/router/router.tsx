import RootLayout from "@/layout/root";
import Blog from "@/pages/blog";
import BlogTwo from "@/pages/blog-2";
import BlogDetails from "@/pages/blog-details";
import BlogList from "@/pages/blog-list";
import BlogRightSidebar from "@/pages/blog-right-sidebar";
import Home from "@/pages/home";
import HomeTwo from "@/pages/home-2/page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog-2",
        element: <BlogTwo />,
      },
      {
        path: "/blog-list",
        element: <BlogList />,
      },
      {
        path: "/blog-right-sidebar",
        element: <BlogRightSidebar />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      // --------------------Start Dark Page Router here
      {
        path: "/home-2",
        element: <HomeTwo />,
      },
      {
        path: "/blog-dark",
        element: <Blog />,
      },
      {
        path: "/blog-2-dark",
        element: <BlogTwo />,
      },
      {
        path: "/blog-list-dark",
        element: <BlogList />,
      },
      {
        path: "/blog-right-sidebar-dark",
        element: <BlogRightSidebar />,
      },
      {
        path: "/blog-details-dark",
        element: <BlogDetails />,
      },
    ],
  },
]);
