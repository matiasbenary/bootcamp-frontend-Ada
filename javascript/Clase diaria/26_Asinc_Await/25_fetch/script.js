const imgCard = document.getElementById("imgCard");
const titleCard = document.getElementById("titleCard");
const textCard = document.getElementById("textCard");

// const updateCard = () => {
//   fetch("https://rickandmortyapi.com/api/character/1")
//     .then((response) => {
//       return response.json();
//       // response.json()
//     })
//     .then((data) => {
//       console.log(data);
//       imgCard.src = data.image;
//       titleCard.innerText = data.name;
//       textCard.innerHTML = `
//         <ul>
//             <li>Estado:${data.status}</li>
//             <li>Especie:${data.species}</li>
//         </ul>
//       `;
//     });
// };
let data;
const updateCard = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/1");
  data = await response.json();

  imgCard.src = data.image;
  titleCard.innerText = data.name;
  textCard.innerHTML = `
    <ul>
        <li>Estado:${data.status}</li>
        <li>Especie:${data.species}</li>
    </ul>
  `;
};

updateCard();
