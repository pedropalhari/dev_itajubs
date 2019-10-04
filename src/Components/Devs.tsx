import React from "react";

//links em ordem alfabética plmdds

const devList: PropsDevCard[] = [
  {
    name: "Pedro Palhari",
    devPhoto: require("../Images/devs/pedro_palhari.jpg"),
    badge: require("../Images/badges/teepad.png"),
    phrase: "tomador de café, programador nas horas vagas",
    links: [
      { linkName: "_github", linkURL: "https://github.com/pedropalhari" },
      {
        linkName: "_instagram",
        linkURL: "https://www.instagram.com/pedropalhari/"
      }
    ]
  },
  {
    name: "Guilherme Marques",
    nameSize: 24,
    devPhoto: require("../Images/devs/gui_marques.png"),
    badge: require("../Images/badges/teepad.png"),
    phrase: "entre 0 e 1 existe o infinito.",
    links: [
      { linkName: "_github", linkURL: "https://github.com/guilhermemntt" },
      {
        linkName: "_linkedin",
        linkURL: "https://www.linkedin.com/in/guilhermemntt"
      }
    ]
  },
  {
    name: "Gabriel Roriz",
    devPhoto: require("../Images/devs/roriz.jpeg"),
    phrase: "🚀",
    links: [
      {
        linkName: "_linkedin",
        linkURL: "https://br.linkedin.com/in/gabriel-roriz"
      }
    ]
  },
  {
    name: "Danilo Mattos",
    devPhoto: require("../Images/devs/danilo.jpeg"),
    phrase: "lorem ipsum",
    links: [
      { linkName: "_github", linkURL: "https://github.com/DaniloGMattos" },
      {
        linkName: "_instagram",
        linkURL: "https://instagram.com/danilowebdev/"
      }
    ]
  },
  {
    name: "Marcelo Magalhães",
    devPhoto: require("../Images/devs/marcelo.jpeg"),
    phrase: "aprendiz de dev na intenção de criar o Jarvis",
    links: [
      {
        linkName: "_instagram",
        linkURL: "https://www.instagram.com/mallssa/"
      },
      {
        linkName: "_facebook",
        linkURL: "https://facebook.com/marcelo.magalhaessilva"
      }
    ]
  }
];

export default function DevList() {
  let leftList: PropsDevCard[] = [];
  let rightList: PropsDevCard[] = [];
  devList.forEach((dev, index) => {
    if (index < devList.length / 2) leftList.push(dev);
    else rightList.push(dev);
  });

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
          {leftList.map(dev => (
            <DevCard {...dev} />
          ))}
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
          {rightList.map(dev => (
            <DevCard {...dev} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PropsDevCard {
  name: string;
  phrase: string;
  devPhoto: string;
  badge?: string;
  nameSize?: number | 32;
  links: {
    linkName: string;
    linkURL: string;
  }[];
}

function DevCard(props: PropsDevCard) {
  return (
    <div
      className="card card-3"
      style={{
        backgroundColor: "#272121",
        height: 100,
        width: 460,
        marginBottom: 30,
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
          src={props.devPhoto}
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
              height: 37,
              fontSize: props.nameSize || 32,
              marginBottom: 10,
              marginRight: 10
            }}
          >
            {props.name}
          </code>
          {props.badge ? (
            <img
              src={props.badge}
              style={{
                width: 28,
                height: 28,
                borderRadius: 26,
                backgroundColor: "white",
                opacity: 1
              }}
            />
          ) : null}
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
          "{props.phrase}"
        </code>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {props.links.map(link => (
            <a
              href={link.linkURL}
              target="_blank"
              style={{
                fontSize: 12,
                fontStyle: "italic",
                color: "#ff4d00",
                marginRight: 10
              }}
            >
              {link.linkName}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
