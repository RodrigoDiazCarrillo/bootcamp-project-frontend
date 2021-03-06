import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Search } from "./pages/Search";
import { Postad } from "./pages/Postad";
import { User } from "./pages/User";
import "./App.css";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/postad" element={<Postad />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>
    </div>
  );
}

export default App;
