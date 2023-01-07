import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Description } from "../pages/Description";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/description" element={<Description />} />
    </Routes>
  );
};
