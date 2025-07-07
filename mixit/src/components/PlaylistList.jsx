import React from "react";
import PlaylistCard from "./PlaylistCard";

const PlaylistList = ({ playlists, onSelect }) => {
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {playlists.map((p) => (
        <PlaylistCard key={p.id} playlist={p} onClick={onSelect} />
      ))}
    </div>
  );
};

export default PlaylistList;
