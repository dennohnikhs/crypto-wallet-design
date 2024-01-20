import { useState } from "react";

function Button({ label, styledClass }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`text-secondary ${styledClass} ${
        isClicked ? "bg-secondary text-white rounded-2 fs-6 shadow-md " : ""
      }`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
}

export default Button;
