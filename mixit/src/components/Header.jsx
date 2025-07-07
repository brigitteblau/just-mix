import React, { useEffect, useState } from "react";
import axios from "axios";

const Header = ({ token }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  return user ? (
    <header style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <img
        src={user.images?.[0]?.url}
        alt="avatar"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
      <span>Hola, {user.display_name}</span>
    </header>
  ) : (
    <p>Cargando usuario...</p>
  );
};

export default Header;
