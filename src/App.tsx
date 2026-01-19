// import "@/assets/css/animate.min.css";
import "@/assets/css/bootstrap-icons.min.css";
import "@/assets/css/fontawesome.all.min.css";
import "@/assets/css/style.css";
import "@/assets/css/dark-mode.css";
import "@/assets/css/responsive.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
