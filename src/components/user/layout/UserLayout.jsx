import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function UserLayout() {
  return (
    <div className="bg-gray-800 min-h-screen w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
