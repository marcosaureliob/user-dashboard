import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import ForgotPassword from "../pages/forgot-password";
import ChangePassword from "../pages/change-password";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}
