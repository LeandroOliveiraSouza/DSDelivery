import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Routes from "./Routes";

export default function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}
