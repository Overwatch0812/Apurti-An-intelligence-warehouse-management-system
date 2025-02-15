import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import WarehouseConfigForm from "./pages/dashboard";
import WarehouseForm from "./pages/WarehouseForm";
import FuturisticChatFullPage from "./pages/FuturisticChatFullPage";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Dashboard /> */}

      {/* <FuturisticChatFullPage /> */}
      <Routes>
        <Route path="/" element={<WarehouseForm />} />
        <Route path="/chat" element={<FuturisticChatFullPage />} />
        <Route path="/forecast" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
