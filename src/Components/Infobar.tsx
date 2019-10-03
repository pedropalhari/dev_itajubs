import React from "react";

export default function Infobar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: 900,
        height: 100,
        backgroundColor: "#272121"
      }}
    >
      <code
        style={{
          fontSize: 26,
          color: "white",
          width: 270,
          textAlign: "center"
        }}
      >
        10+ devs 🚀
      </code>
      <div style={{ height: 60, width: 3, backgroundColor: "white" }}></div>
      <code
        style={{
          fontSize: 26,
          color: "white",
          width: 270,
          textAlign: "center"
        }}
      >
        1 evento 😢
      </code>
      <div style={{ height: 60, width: 3, backgroundColor: "white" }}></div>
      <code
        style={{
          fontSize: 26,
          color: "white",
          width: 270,
          textAlign: "center"
        }}
      >
        20+ mentorias 📖
      </code>
    </div>
  );
}
