import { Tabs, Tab, Box } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const location = useLocation();

  const tabs = [
    { label: "Dashboard", to: "/admin/dashboard" },
    { label: "Users", to: "/admin/users" },
    { label: "Films", to: "/admin/films" },
    { label: "Add New", to: "/admin/films/add-new" },
    { label: "Logout", to: "/auth/admin/login" },
  ];

  const getCurrentTab = () => {
    const index = tabs.findIndex((tab) => location.pathname.startsWith(tab.to));
    return index === -1 ? 0 : index;
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Tabs
        orientation="vertical"
        value={getCurrentTab()}
        sx={{ borderRight: 1, borderColor: "divider", minWidth: 220 }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} component={Link} to={tab.to} />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
