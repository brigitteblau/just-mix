// App.jsx actualizado con rutas
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { getTokenFromUrl } from "./utils/spotify";
import Login from "./components/Login";
import Home from "./pages/Home";
import MixResult from "./components/MixResult";


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/home" /> : <Login />}
        />
        <Route path="/home" element={<Home token={token} />} />
        <Route path="/mix" element={<MixResult/>} /> {/* cuando esté listo */}
      </Routes>
    </Router>
  );
}

export default App;