import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: "black",
          color: "white",
          position: "fixed",
          width: "100%",
          height: "50px",
          fontSize: "23px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "0",
            height: "100%",
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/temp-convert">Temperature Converter</Link>
          </li>
          <li>
            <Link to="/users/1">Users</Link>
          </li>
          <li>
            <Link to="/min">Minimum Number</Link>
          </li>
          <li>
            <Link to="/mag-sub">Magazine Submissions</Link>
          </li>
        </ul>
      </nav>
      <div style={{ height: "50px" }} />
    </>
  );
};
