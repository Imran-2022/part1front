import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import Registration from "./components/auth/Registration";
import ResetPassword from "./components/auth/ResetPassword";
import Home from "./components/Home";
import useAuthCheck from "./components/hooks/useAuthCheck";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import NoMatch from "./ui/NoMatch";

function App() {

  const authChecked = useAuthCheck();

  return !authChecked ? <div className="flex gap-3 justify-center items-center h-screen font-bold">
    <p className="text-cyan-700">Auth Checking ....</p>
    <div class="w-12 h-12 rounded-full animate-spin border-x-2 border-solid border-blue-500 border-t-transparent"></div>
  </div> :
    (
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/registration" element={<PublicRoute><Registration /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><LogIn /></PublicRoute>} />
        <Route path="/forget-password" element={<PublicRoute><ResetPassword /></PublicRoute>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    );
}

export default App;
