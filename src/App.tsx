import React from "react";
import Logo from "./Components/Logo";
import Infobar from "./Components/Infobar";
import "./App.css";
import Proposal from "./Components/Proposal";
import Carousel from "./Components/Carousel";
import DevList from "./Components/Devs";
import Mailchimp from "./Components/Mailchimp";

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

      <DevList />
      
      <Mailchimp />
    </div>
  );
}

export default App;
