// MixResult.jsx - mezcla simulada con audio desde YouTube (video oculto)
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../shared/Loader"
const MixResult = () => {
  const location = useLocation();
  const { tracks } = location.state || {};
  const [videoIds, setVideoIds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);

  // Cargar la API de YouTube
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = loadVideoIds;
  }, []);

  // Buscar los IDs de los videos de YouTube
  const loadVideoIds = async () => {
    if (!tracks || tracks.length === 0) return;

    const results = await Promise.all(
      tracks.map(async (track) => {
        const query = `${track.name} ${track.artists[0].name}`;
        try {
          const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              part: "snippet",
              q: query,
              key: import.meta.env.VITE_YOUTUBE_API_KEY,
              maxResults: 1,
              type: "video",
            },
          });
          return res.data.items[0].id.videoId;
        } catch (err) {
          console.error("Error buscando en YouTube", err);
          return null;
        }
      })
    );

    const validIds = results.filter((id) => id !== null);
    setVideoIds(validIds);
  };

  // Inicializar el reproductor
  useEffect(() => {
    if (videoIds.length === 0) return;

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("player", {
        height: "0",
        width: "0",
        videoId: videoIds[currentIndex],
        events: {
          onReady: (event) => event.target.playVideo(),
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              const nextIndex = currentIndex + 1;
              if (nextIndex < videoIds.length) {
                setCurrentIndex(nextIndex);
                playerRef.current.loadVideoById(videoIds[nextIndex]);
              }
            }
          },
        },
      });
    };

    // Si ya está cargado
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }
  }, [videoIds, currentIndex]);

  return (
    <div>
      <h2>Tu mezcla personalizada 🎧</h2>
      {!tracks || tracks.length === 0 ? (
        <p>No hay canciones seleccionadas.</p>
      ) : videoIds.length === 0 ? (
       <Loader/>
      ) : (
        <div>
          <p>
            Reproduciendo: <strong>{tracks[currentIndex].name}</strong> – {" "}
            {tracks[currentIndex].artists.map((a) => a.name).join(", ")}
          </p>
          <div id="player" style={{ height: 0, width: 0, overflow: "hidden" }}></div>
        </div>
      )}
    </div>
  );
};

export default MixResult;
