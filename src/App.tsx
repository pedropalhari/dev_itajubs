import React, { useState } from "react";
import Logo from "./Components/Logo";
import Infobar from "./Components/Infobar";
import "./App.css";
import Proposal from "./Components/Proposal";
import theDayLogo from "./Images/the-day.jpeg";
import Calendar from "./Components/Calendar";

//https://colorhunt.co/palette/158462

function App() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        overflowX: "hidden",
        width: "100vw",
        backgroundColor: "#443737",
        paddingBottom: 200
      }}
    >
      <Logo />

      <Infobar />

      <Proposal />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          width: 900,
          paddingTop: 100
        }}
      >
        <div
          style={{
            height: 300,
            width: 900,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            flexDirection: "column"
          }}
        >
          <code
            style={{
              color: "white",
              fontSize: 70,
              backgroundColor: "#272121",
              marginBottom: 10
            }}
          >
            Nossos
          </code>
          <code
            style={{ color: "white", fontSize: 70, backgroundColor: "#272121" }}
          >
            Eventos
          </code>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            width: 900,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

function Card() {
  let [isHovering, setIsHovering] = useState(false);
  let [isPressing, setIsPressing] = useState(false);

  return (
    <div
      className="card card-3"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        width: 250,
        height: 400,
        backgroundColor: "#272121",
        paddingBottom: 20
      }}
    >
      <img
        src={theDayLogo}
        style={{
          width: 250,
          height: 200,
          objectFit: "cover",
          marginBottom: 10
        }}
      />
      <code style={{ fontSize: 30, color: "white" }}>The Day 1.0</code>

      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Calendar />
        <code style={{ color: "white" }}>05/10 - 08hs ~ 20hs</code>
      </div>

      <div
        className="noselect"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 3,
          borderStyle: "solid",
          borderColor: "white",
          backgroundColor: isHovering ? "white" : "transparent",
          width: 200,
          height: 40,
          cursor: "pointer",
          opacity: isPressing ? 0.3 : 1
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={() => setIsPressing(true)}
        onMouseUp={() => setIsPressing(false)}
      >
        <code
          style={{
            color: isHovering ? "#272121" : "white",
            fontSize: 18
          }}
        >
          QUERO IR
        </code>
      </div>
    </div>
  );
}

export default App;
