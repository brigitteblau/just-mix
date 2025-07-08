import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { getTokenFromUrl } from "./utils/spotify";
import Home from "./pages/Home";
import MixResult from "./components/MixResult";
import Landing from "./landing/Landing";

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("spotify_token"));

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      localStorage.setItem("spotify_token", _token); // lo guardás si querés persistencia
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* ✅ Ruta raíz muestra la landing siempre */}
        <Route path="/" element={<Landing />} />

        {/* ✅ Alias por si querés mantener /landing */}
        <Route path="/landing" element={<Landing />} />

        {/* ✅ Rutas protegidas */}
        <Route
          path="/home"
          element={token ? <Home token={token} /> : <Navigate to="/" />}
        />
        <Route
          path="/mix"
          element={token ? <MixResult /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
