import { Routes, Route, Navigate } from "react-router-dom";
import renderRoutes from "./routes/Route.jsx";

function App() {
  return <Routes>{renderRoutes()}</Routes>;
}

export default App;
