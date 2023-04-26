const Background = ({ theme }) => {
  return (
    <div className="background-container">
      <div
        className="background"
        style={{
          // background:
          //   theme === "light-theme"
          //     ? "url(/src/assets/images/light-background.png)"
          //     : "url(/src/assets/images/dark-background.png)",
          filter: theme === "light-theme" ? "none" : "invert(100%)",
          opacity: theme === "light-theme" ? "33%" : "100%",
        }}
      ></div>
    </div>
  );
};
export default Background;
