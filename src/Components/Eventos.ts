// Images import
export interface DevEvent {
  image: string;
  title: string;
  date: string;
  symplaURL: string;
  titleSize?: number | 30;
  author: string;
  done: boolean;
}

export const eventList: DevEvent[] = [
  {
    date: "xx/08 - 8hs ~ 9hs",
    title: "The Coffee 1.0 (GraphQL)",
    image: require("../Images/graphql.jpg"),
    author: "Rodrigo Protazio",
    symplaURL:
      "https://www.sympla.com.br/the-day-10--comunidade-dev-itajuba__660232?s_src=177392&s_idx=0",
    done: true
  },
  {
    date: "xx/08 - 8hs ~ 9hs",
    title: "The Coffee 2.0 (React)",
    image: require("../Images/react.png"),
    author: "Guilherme Borges",
    symplaURL:
      "https://www.sympla.com.br/the-day-10--comunidade-dev-itajuba__660232?s_src=177392&s_idx=0",
    done: true
  },
  {
    date: "xx/08 - 8hs ~ 9hs",
    title: "The Coffee 3.0 (Porquê React é uma m*rda)",
    image: require("../Images/react_shit.png"),
    author: "Pedro Palhari",
    titleSize: 18,
    symplaURL:
      "https://www.sympla.com.br/the-day-10--comunidade-dev-itajuba__660232?s_src=177392&s_idx=0",
    done: true
  },
  {
    date: "xx/08 - 8hs ~ 9hs",
    title: "The Coffee 4.0 (A linguagem Go)",
    image: require("../Images/go.png"),
    author: "Cristiano Costa",
    titleSize: 23,
    symplaURL:
      "https://www.sympla.com.br/the-day-10--comunidade-dev-itajuba__660232?s_src=177392&s_idx=0",
    done: true
  },
  {
    date: "xx/08 - 8hs ~ 9hs",
    title: "The Coffee 5.0 (NGINX)",
    author: "Guilherme Marques",
    image: require("../Images/nginx.png"),
    symplaURL:
      "https://www.sympla.com.br/the-day-10--comunidade-dev-itajuba__660232?s_src=177392&s_idx=0",
    done: true
  },
  {
    date: "05/10 - 08hs ~ 20hs",
    title: "The Day 1.0",
    author: "Evento",
    image: require("../Images/the-day.jpeg"),
    symplaURL:
      "https://www.sympla.com.br/the-day-10--comunidade-dev-itajuba__660232?s_src=177392&s_idx=0",
    done: false
  }
];
