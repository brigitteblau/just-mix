import React from "react";
import { getSpotifyAuthURL } from "../utils/spotify";

const Login = () => {
  return (
    <div>
      <h1>Bienvenido a Mixit</h1>
<button onClick={() => window.location.href = getSpotifyAuthURL()}>
  Iniciar sesión con Spotify
</button>

    </div>
  );
};

export default Login;
