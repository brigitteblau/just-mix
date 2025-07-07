import React, { useEffect, useState } from "react";
import axios from "axios";

const PlaylistSearch = ({ token }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setPlaylists(res.data.items))
      .catch((err) => console.error(err));
  }, [token]);

  return (
    <div>
      <h2>Elegí una playlist</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistSearch;
