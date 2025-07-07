
// Home.jsx separado y escalado
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import PlaylistList from "../components/PlaylistList";
import TrackList from "../components/TrackList";
import { useNavigate } from "react-router-dom";

const Home = ({ token }) => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setPlaylists(res.data.items));
  }, [token]);

  const handleCreateMix = (tracks) => {
    // Guardás los tracks en estado global, context, localStorage, etc.
    // Por ahora podés navegar al mix
    navigate("/mix", { state: { tracks } });
  };

  return (
    <div>
      <Header token={token} />
      {!selectedPlaylist ? (
        <PlaylistList playlists={playlists} onSelect={setSelectedPlaylist} />
      ) : (
        <TrackList
          playlist={selectedPlaylist}
          token={token}
          onCreateMix={handleCreateMix}
        />
      )}
    </div>
  );
};

export default Home;
