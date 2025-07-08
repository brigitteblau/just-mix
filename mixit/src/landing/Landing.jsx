//src/landing/Landing.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import content  from "./content";
import { getSpotifyAuthURL } from "../utils/spotify";
import Header from "../components/Header";
import PlaylistList from "../components/PlaylistList";
import TrackList from "../components/TrackList";

import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  FAQSection,
  FormSection,
  CTASection,
} from "./Components"

const Landing = () => {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  const [token, setToken] = useState(() => localStorage.getItem("spotify_token"));
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const navigate = useNavigate();

  // Obtener token de la URL (cuando se vuelve de Spotify)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const _token = new URLSearchParams(hash.substring(1)).get("access_token");
      if (_token) {
        setToken(_token);
        localStorage.setItem("spotify_token", _token);
        window.location.hash = ""; // limpiar
      }
    }
  }, []);

  // Cargar playlists si hay token
  useEffect(() => {
    if (token) {
      axios
        .get("https://api.spotify.com/v1/me/playlists", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => setPlaylists(res.data.items));
    }
  }, [token]);

  const handleCreateMix = (tracks) => {
    navigate("/mix", { state: { tracks } });
  };

  return (
    <>
      {!token ? (
        <>
          <HeroSection t={t} onLogin={() => window.location.href = getSpotifyAuthURL()} />
          <FeaturesSection t={t} />
          <TestimonialsSection t={t} />
          <FAQSection t={t} />
          <FormSection t={t} />
          <CTASection t={t} />
        </>
      ) : (
        <>
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
        </>
      )}

      {/* Selector de idioma */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="bg-gray-200 px-3 py-1 rounded text-sm"
        >
          {lang === "en" ? "Español" : "English"}
        </button>
      </div>
    </>
  );
};

export default Landing;
