import React from "react";
import Logo from "./Components/Logo";
import Infobar from "./Components/Infobar";
import "./App.css";
import Proposal from "./Components/Proposal";
import Carousel from "./Components/Carousel";

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

      <Carousel />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          width: 1000,
          paddingTop: 100
        }}
      >
        <div
          style={{
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
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
            Os
          </code>
          <code
            style={{ color: "white", fontSize: 70, backgroundColor: "#272121" }}
          >
            Devs
          </code>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "row"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "flex-start",
              width: 500
            }}
          >
            <div
              className="card card-3"
              style={{
                backgroundColor: "#272121",
                height: 100,
                width: 460,

                display: "flex",
                flexDirection: "row"
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  display: "flex",
                  marginLeft: 10,
                  alignItems: "center"
                }}
              >
                <img
                  src={require("./Images/devs/pedro_palhari.jpg")}
                  style={{
                    width: 72,
                    objectFit: "cover",
                    borderStyle: "solid",
                    borderColor: "white",
                    borderWidth: 3
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  height: 100,
                  marginTop: 10,
                  flexDirection: "column"
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <code
                    style={{
                      color: "white",
                      fontSize: 32,
                      marginBottom: 10,
                      marginRight: 10
                    }}
                  >
                    Pedro Palhari
                  </code>

                  <img
                    src={require("./Images/badges/teepad.png")}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 26,
                      backgroundColor: "white",
                      opacity: 1
                    }}
                  />
                </div>
                <code
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontStyle: "italic",
                    opacity: 0.5,
                    marginBottom: 10
                  }}
                >
                  "tomador de café, programador nas horas vagas"
                </code>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <a
                    href={"https://google.com"}
                    target="_blank"
                    style={{
                      fontSize: 12,
                      fontStyle: "italic",
                      color: "#ff4d00",
                      marginRight: 10
                    }}
                  >
                    _github
                  </a>

                  <a
                    href={"https://google.com"}
                    target="_blank"
                    style={{
                      fontSize: 12,
                      fontStyle: "italic",
                      color: "#ff4d00"
                    }}
                  >
                    _instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "flex-end",
              width: 500
            }}
          >
            <div
              className="card card-3"
              style={{ backgroundColor: "#272121", height: 100, width: 460 }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
