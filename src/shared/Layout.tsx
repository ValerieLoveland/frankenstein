import React from "react";

export const LayoutColor: React.FC = (props) => {
  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      {props.children}
    </div>
  );
};
