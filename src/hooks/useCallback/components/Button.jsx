import { memo } from "react";

function Button({ handleClick, children, ...props }) {
  console.log(`Rendering Button - ${children}`);
  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        margin: "5px",
        fontSize: "16px",
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default memo(Button);
