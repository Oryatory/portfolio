const Background = ({ theme }) => {
  return (
    <div className="background-container">
      <div
        className="background__image"
        style={{
          filter: theme === "light-theme" ? "none" : "invert(100%)",
          opacity: theme === "light-theme" ? "33%" : "100%",
        }}
      ></div>
      <div
        className="background__noise"
        // style={{
        //   filter: theme === "light-theme" ? "none" : "invert(100%)",
        // }}
      ></div>
    </div>
  );
};
export default Background;
