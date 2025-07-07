// TrackList.jsx - Permite seleccionar canciones y crear mezcla
import React, { useEffect, useState } from "react";
import axios from "axios";

const TrackList = ({ playlist, token, onCreateMix }) => {
  const [tracks, setTracks] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setTracks(res.data.items))
      .catch((err) => console.error(err));
  }, [playlist, token]);

  const toggleTrack = (track) => {
    const alreadySelected = selectedTracks.find((t) => t.id === track.id);
    if (alreadySelected) {
      setSelectedTracks(selectedTracks.filter((t) => t.id !== track.id));
    } else if (selectedTracks.length < 5) {
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  return (
    <div>
      <h3>{playlist.name}</h3>
      <p>Seleccioná hasta 5 canciones:</p>
      <ul>
        {tracks.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            <label>
              <input
                type="checkbox"
                disabled={
                  !selectedTracks.find((t) => t.id === item.track.id) &&
                  selectedTracks.length >= 5
                }
                checked={!!selectedTracks.find((t) => t.id === item.track.id)}
                onChange={() => toggleTrack(item.track)}
              />
              {" "}
              {item.track.name} – {item.track.artists.map((a) => a.name).join(", ")}
            </label>
          </li>
        ))}
      </ul>

      {selectedTracks.length > 0 && (
        <button
          onClick={() => onCreateMix(selectedTracks)}
          style={{ marginTop: "1rem" }}
        >
          Crear mezcla
        </button>
      )}
    </div>
  );
};

export default TrackList;
