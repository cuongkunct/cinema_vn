import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function UserLayout() {
  return (
    <div className="bg-gray-800 min-h-screen w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
