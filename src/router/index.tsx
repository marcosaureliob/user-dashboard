import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import SignUp from "../pages/sing-up";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
