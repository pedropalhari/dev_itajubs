import React, { useState } from "react";
import "../App.css"
export default function Mailchimp() {
  let [email, setEmail] = useState("");
  let [nome, setNome] = useState("");
  let [sobrenome, setSobrenome] = useState("");

  return (
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
          width: 1000,
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
          Nossa
        </code>
        <code
          style={{ color: "white", fontSize: 70, backgroundColor: "#272121" }}
        >
          Newsletter
        </code>
      </div>

      <div
        id="mc_embed_signup"
        style={{
          width: 1000,
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <code
          style={{
            color: "white",
            fontSize: 24,
            marginBottom: 30,
            width: 500,
            textAlign: "center",
            opacity: 0.5
          }}
        >
          tá afim de continuar por dentro? então se inscreva e fique por dentro
          de tudo que a gente solta na comunidade de dev!
        </code>

        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=5cc797bd3621af64c7c6e847f&amp;id=6656911541"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <div
            id="mc_embed_signup_scroll"
            className="card card-3"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#272121",
              width: 510,
              padding: 50
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 20
              }}
            >
              <code style={{ color: "white", fontSize: 32, marginBottom: 10 }}>
                email
              </code>
              <input
                style={{
                  borderColor: "white",
                  borderStyle: "solid",
                  borderWidth: 3,
                  width: 500,
                  height: 40,
                  fontSize: 24,
                  paddingLeft: 10,
                  backgroundColor: "transparent",
                  fontFamily:
                    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
                  color: "white"
                }}
                type="email"
                value={email}
                onChange={evt => setEmail(evt.target.value)}
                name="EMAIL"
                id="mce-EMAIL"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <code
                  style={{ color: "white", fontSize: 32, marginBottom: 10 }}
                >
                  nome
                </code>
                <input
                  style={{
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: 3,
                    width: 220,
                    marginRight: 40,
                    height: 40,
                    fontSize: 24,
                    paddingLeft: 10,
                    backgroundColor: "transparent",
                    fontFamily:
                      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
                    color: "white"
                  }}
                  type="text"
                  value={nome}
                  onChange={evt => setNome(evt.target.value)}
                  name="FNAME"
                  id="mce-FNAME"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <code
                  style={{ color: "white", fontSize: 32, marginBottom: 10 }}
                >
                  sobrenome
                </code>
                <input
                  style={{
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: 3,
                    width: 220,
                    height: 40,
                    fontSize: 24,
                    paddingLeft: 10,
                    backgroundColor: "transparent",
                    fontFamily:
                      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
                    color: "white"
                  }}
                  type="text"
                  value={sobrenome}
                  onChange={evt => setSobrenome(evt.target.value)}
                  name="LNAME"
                  id="mce-LNAME"
                />
              </div>
            </div>
            <div id="mce-responses">
              <div id="mce-error-response" style={{ display: "none" }}></div>
              <div id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div
              style={{ position: "absolute", left: -5000 }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_5cc797bd3621af64c7c6e847f_6656911541"
                value=""
              />
            </div>
            <div>
              <input
                style={{
                  marginTop: 40,
                  borderColor: "white",
                  borderStyle: "solid",
                  borderWidth: 3,
                  width: 516,
                  height: 40,
                  fontSize: 24,
                  paddingLeft: 10,
                  backgroundColor: "transparent",
                  fontFamily:
                    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
                  color: "white"
                }}
                type="submit"
                value="inscrever"
                name="subscribe"
                id="mc-embedded-subscribe"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
