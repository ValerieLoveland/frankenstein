import React from "react";

export const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "0px",
        position: "fixed",
        width: "100%",
        height: "50px",
        alignItems: "center",
        fontSize: "23px",
        listStyleType: "none",
        padding: "0",
      }}
    >
      <ul style={{}}></ul>
    </div>
  );
};

interface NavBarProps {
  title?: string;
}
