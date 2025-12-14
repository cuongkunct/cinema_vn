import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <Outlet />
    </div>
  );
}
