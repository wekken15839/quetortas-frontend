import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/ui/Sidebar";
import HomePage from "./components/pages/home/HomePage";
import SalesPage from "./components/pages/sales/SalesPage";
import HistoryPage from "./components/pages/history/HistoryPage";
import DashboardPage from "./components/pages/dashboard/DashboardPage";
import ConfigPage from "./components/pages/configuration/ConfigPage";
import { NavBar } from "./components/ui/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sales" element={<SalesPage />}></Route>
        <Route path="/history" element={<HistoryPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/config" element={<ConfigPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
