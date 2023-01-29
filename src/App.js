import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import Registration from "./components/auth/Registration";
import ResetPassword from "./components/auth/ResetPassword";
import Home from "./components/Home";
import NoMatch from "./ui/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/forget-password" element={<ResetPassword />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
