import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./layout/MainLayout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/CreateUser";
import ChangeUser from "./pages/ChangeUser";
import SDO from "./pages/SDO";
import Lineman from "./pages/Lineman";
import ETG from "./pages/ETG";
import CES from "./pages/CES";
import Report from "./pages/Report";
import CESAudit from "./pages/CES Audit";
import ForgotPassword from "./pages/ForgotPassword";
import Users from "./pages/Users";



import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="change-user" element={<ChangeUser />} />
          <Route path="sdo" element={<SDO />} />
          <Route path="lineman" element={<Lineman />} />
          <Route path="etg" element={<ETG />} />
          <Route path="ces" element={<CES />} />
          <Route path="ces-audit" element={<CESAudit />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
