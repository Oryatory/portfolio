const Background = ({ theme, position }) => {
  return (
    <div
      className="background-container"
      style={{
        position: position,
        width: "100%",
        top: 0,
      }}
    >
      <div
        className="background__image"
        style={{
          filter: theme === "light-theme" ? "none" : "invert(100%)",
          opacity: theme === "light-theme" ? "33%" : "100%",
          position: position,
        }}
      ></div>
      <div
        className="background__noise"
        style={{
          position: position,
        }}
      ></div>
    </div>
  );
};
export default Background;
