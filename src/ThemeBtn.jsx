import { useState } from "react";

const ThemeBtn = ({ toggleTheme, getStorageTheme }) => {
  const [shiftLeft, setShiftLeft] = useState(
    getStorageTheme() === "light-theme" ? false : true
  );

  return (
    <button
      className="theme-btn"
      onClick={() => {
        setShiftLeft(!shiftLeft);
        toggleTheme();
      }}
    >
      <div
        className={`theme-btn__circle ${
          shiftLeft ? "shift-left" : "shift-right"
        }`}
      ></div>
    </button>
  );
};
export default ThemeBtn;
