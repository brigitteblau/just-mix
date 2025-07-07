const PlaylistCard = ({ playlist, onClick }) => {
  return (
    <div
      onClick={() => onClick(playlist)}
      style={{
        width: 200,
        padding: 10,
        background: "#121212",
        color: "white",
        borderRadius: 8,
        cursor: "pointer",
      }}
    >
      <img
        src={playlist.images?.[0]?.url}
        alt={playlist.name}
        style={{ width: "100%", borderRadius: 8 }}
      />
      <h4 style={{ marginTop: 8 }}>{playlist.name}</h4>
      <p style={{ fontSize: 12, color: "#b3b3b3" }}>
        {playlist.tracks.total} canciones
      </p>
    </div>
  );
};

export default PlaylistCard;
