import React from "react";

export default function Proposal() {
  return (
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
          Nossa
        </code>
        <code
          style={{ color: "white", fontSize: 70, backgroundColor: "#272121" }}
        >
          Proposta
        </code>
      </div>

      <code
        style={{
          color: "white",
          fontSize: 28,
          textAlign: "justify",
          lineHeight: 1.5
        }}
      >
        DEV/Itajubá é uma comunidade de desenvolvedores de tecnologia que, por
        meio do{" "}
        <strong style={{ color: "red" }}>
          compartilhamento de experiências
        </strong>
        , aprendem e dominam as linguagens e ferramentas mais modernas e{" "}
        <strong style={{ color: "red" }}>
          evoluem em suas empresas e carreiras
        </strong>
        , de forma <strong style={{ color: "red" }}>colaborativa</strong> e{" "}
        <strong style={{ color: "red" }}>descontraída</strong>.
      </code>
    </div>
  );
}
