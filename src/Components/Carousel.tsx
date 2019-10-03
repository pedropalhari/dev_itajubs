import React, { useState, useEffect, PropsWithChildren } from "react";
import "../App.css";
import Calendar from "../Components/Calendar";
import { DevEvent, eventList } from "./Eventos";

export default function Carousel() {
  const carouselIndexEnd = eventList.length - 4;
  const caroulselIndexStart = 3;
  let [carouselIndex, setCarouselIndex] = useState(carouselIndexEnd);
  let [subEventList, setSubEventList] = useState<DevEvent[]>([]);

  useEffect(() => {
    setSubEventList(
      eventList.filter((event, index) => {
        if (index > carouselIndex && index <= carouselIndex + 3) return event;
      })
    );
  }, [carouselIndex]);

  function carouselRight() {
    if (carouselIndex < carouselIndexEnd) {
      setCarouselIndex(carouselIndex + 1);
    }
  }

  function carouselLeft() {
    if (carouselIndex >= 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  }

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
          width: 1000,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <CarouselButton
          shouldShow={!(carouselIndex == -1)}
          onClick={carouselLeft}
        >
          {"<"}
        </CarouselButton>
        {subEventList.map(event => (
          <Card event={event} />
        ))}
        <CarouselButton
          shouldShow={!(carouselIndex == carouselIndexEnd)}
          onClick={carouselRight}
        >
          {">"}
        </CarouselButton>
      </div>
    </div>
  );
}

interface CardProps {
  event: DevEvent;
}

function Card(props: CardProps) {
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
      <div style={{ width: 250, height: 200 }}>
        <img
          src={props.event.image}
          style={{
            width: 250,
            height: 200,
            objectFit: "cover",
            marginBottom: 10
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100
        }}
      >
        <code
          style={{
            fontSize: props.event.titleSize || 24,
            color: "white",
            textAlign: "center",
            paddingRight: 10,
            paddingLeft: 10
          }}
        >
          {props.event.title}
        </code>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Calendar />
        <code style={{ color: "white" }}>{props.event.date}</code>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <code
          style={{ fontStyle: "italic", color: "white" }}
        >{`- ${props.event.author}`}</code>
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
          opacity: isPressing || props.event.done ? 0.3 : 1
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={() => setIsPressing(true)}
        onMouseUp={() => setIsPressing(false)}
        onClick={() =>
          props.event.done
            ? () => null
            : window.open(props.event.symplaURL, "_blank")
        }
      >
        <code
          style={{
            color: isHovering ? "#272121" : "white",
            fontSize: 18
          }}
        >
          {props.event.done ? "IH, JÁ FOI" : "QUERO IR"}
        </code>
      </div>
    </div>
  );
}

function CarouselButton(
  props: PropsWithChildren<{
    onClick: (...args: any[]) => any;
    shouldShow: boolean;
  }>
) {
  let [isHovering, setIsHovering] = useState(false);
  let [isPressing, setIsPressing] = useState(false);

  let opacity = 0.3;

  if (isPressing) {
    opacity = 0.1;
  }

  if (!props.shouldShow) {
    opacity = 0;
  }
  return (
    <div
      className="card card-3 noselect"
      style={{
        opacity,
        backgroundColor: isHovering ? "white" : "#272121",
        height: 420,
        width: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseDown={() => setIsPressing(true)}
      onMouseUp={() => setIsPressing(false)}
      onClick={() => {
        console.log("adsdsa");
        props.onClick();
      }}
    >
      <code style={{ color: isHovering ? "black" : "white", fontSize: 70 }}>
        {props.children}
      </code>
    </div>
  );
}
