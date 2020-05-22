const speed = 180;
const roulette = document.getElementById("roulette");

const candidates = [
  // ["Mika", "#4363d8"],
  // ["Maria", "#ffd8b1"],
  // ["Belu", "#800000"],
  ["Flor", "#aaffc3"],
  ["Iris", "#46f0f0"],
  ["Mariam", "#ffe119"],
  ["Sheila", "#808080"],
  ["Vale", "#e6194b"],
  // ["Lore", "#f58231"],
  ["Tati", "#46f0f0"],
  ["Deborah", "#ffd8b1"],
  ["Caro Tobar", "#e6194b"],
  // ["Rosana", "#800000"],
  // ["Isa", "#4363d8"],
  // ["Caro", "#911eb4"],
];

const boxes = 100;
const width = 140;

let order = [];

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const play = () => {
  var offset = rand(0, boxes * width - speed) + speed;
  roulette.style.left = -(offset - speed) + "px";

  // let chosenPlayer = document.createElement("div");
  // chosenPlayer.style.backgroundColor =
  //   candidates[order[parseInt(offset / width)]][1];
  // chosenPlayer.innerHTML = candidates[order[parseInt(offset / width)]][0];
  // document.getElementById("winners").appendChild(chosenPlayer);
};

const addBoxes = () => {
  roulette.innerHTML = "";
  order = [];

  if (boxes <= 0) {
    return 0;
  }

  for (let i = 0; i < boxes; i++) {
    let randomPlayer = rand(0, candidates.length);
    order.push(randomPlayer);
    var node = document.createElement("div");
    var h3 = document.createElement("h3");
    h3.innerHTML = candidates[randomPlayer][0];
    node.style.backgroundColor = candidates[randomPlayer][1];
    node.appendChild(h3);
    roulette.appendChild(node);
  }
};

addBoxes();
