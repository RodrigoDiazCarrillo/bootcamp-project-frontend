import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import "./App.css";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>
    </div>
  );
}

export default App;
