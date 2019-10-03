import React from "react";
import "../logo.css";

//https://colorhunt.co/palette/158462

export default function Logo() {
  const fontSize = 72;

  return (
    <div
      style={{
        height: 500,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <code style={{ color: "red", fontSize, WebkitAnimation: "fadein 2s" }}>
        {"<"}
        <code
          style={{ color: "white", fontSize, WebkitAnimation: "fadein 2s" }}
        >
          dev
        </code>
        {"/itajubá>"}
      </code>
      <div className="line" style={{ alignSelf: "flex-start" }} />
    </div>
  );
}
