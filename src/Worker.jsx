import worker from "../src/assets/images/worker.png";
const Worker = ({ theme }) => {
  return (
    <div className="container">
      <img
        src={worker}
        alt="worker"
        style={{
          width: "100%",
          filter: theme === "light-theme" ? "none" : "invert(100%)",
        }}
      />
    </div>
  );
};
export default Worker;
