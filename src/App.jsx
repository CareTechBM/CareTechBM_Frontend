import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import '../src/styles/mainPage.css'

export const App = () => {
  let element = useRoutes(routes);

  return (
    <div className="bg-[#2c3541] h-svh">
      {element}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};