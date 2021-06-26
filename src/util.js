import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Higher",
      cover: "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
      artist: "Misha, Jussi Halme",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15088",
      color: ["#EA7A76", "#2E385B"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Beaver Creek",
      cover: "",
      artist: "",
      audio: "",
      color: ["", ""],
      id: uuidv4(),
      active: true,
    },
  ];
}

export default chillHop;
