import { RoutesComponents } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function App() {
  return (
    <>
      <RoutesComponents />
      <ToastContainer/>
    </>
  );
}
