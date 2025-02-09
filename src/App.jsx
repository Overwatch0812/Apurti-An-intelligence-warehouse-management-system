import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/dashboard";
import WarehouseForm from "./pages/WarehouseForm";
import FuturisticChatFullPage from "./pages/FuturisticChatFullPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Dashboard /> */}
      {/* <WarehouseForm /> */}
      <FuturisticChatFullPage />
    </>
  );
}

export default App;
