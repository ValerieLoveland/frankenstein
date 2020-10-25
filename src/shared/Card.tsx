import React from "react";

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        fontSize: "16px",
        padding: "20px ",
      }}
    >
      <header
        style={{
          color: "black",
          fontSize: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.title}
      </header>
      <div>{props.children}</div>
    </div>
  );
};

interface CardProps {
  title?: string;
}
