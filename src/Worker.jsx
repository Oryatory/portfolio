import worker from "../src/assets/images/worker.png";
const Worker = ({ theme }) => {
  return (
    <div className="container">
      <img
        src={worker}
        alt="worker"
        style={{
          width: "100%",
          filter: theme === "light-theme" ? "none" : "contrast(0.8)",
        }}
      />
    </div>
  );
};
export default Worker;
