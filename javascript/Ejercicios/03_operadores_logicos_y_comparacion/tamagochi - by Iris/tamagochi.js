let health = 10;
let happiness = 10;
let cleanliness = 10;
let energy = 10;
let result;

const tamagochi = (input) => {
  switch (input) {
    case "ALIMENTAR":
      result = feed();
      break;
    case "JUGAR":
      result = play();
      break;
    case "DORMIR":
      result = sleep();
      break;
    case "VACUNAR":
      result = vaccinate();
      break;
    case "BAÑAR":
      result = bath();
      break;
    case "RETAR":
      result = scold();
      break;
    case "ACARICIAR":
      result = stroke();
      break;
    default:
      result = "Error";
  }
  printStatus();
  return result;
};

const feed = () => {
  happiness += 2;
  energy += 3;
};

const play = () => {
  happiness += 2;
  energy -= 2;
  cleanliness -= 1;
};

const sleep = () => {
  energy += 5;
  health += 2;
  cleanliness -= 2;
};

const vaccinate = () => {
  health += 5;
  happiness -= 6;
};

const bath = () => {
  health += 3;
};

const scold = () => {
  happiness -= 3;
};

const stroke = () => {
  happiness += 4;
};

const printStatus = () => {
  alert(
    `Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`
  );
};

while (health > 0) {
  alert("Hola! Soy Foxy! ≧◠ᴥ◠≦");
  printStatus();
  const inputOwner = prompt(
    "Hey, ingresá una opción: ALIMENTAR, JUGAR, DORMIR, VACUNAR, BAÑAR, RETAR o ACARICIAR"
  );
  tamagochi(inputOwner);
}
