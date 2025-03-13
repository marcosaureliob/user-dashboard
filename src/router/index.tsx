import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import ForgotPassword from "../pages/forgot-password";
import CodeValidation from "../pages/code-validation";
import ChangePassword from "../pages/change-password";
import TermsOfServices from "../pages/terms-of-services";
import Dashboard from "../pages/dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/code-validation" element={<CodeValidation />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/terms" element={<TermsOfServices />} />
      </Routes>
    </BrowserRouter>
  );
}
