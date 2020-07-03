const imgCard = document.getElementById("imgCard");
const titleCard = document.getElementById("titleCard");
const textCard = document.getElementById("textCard");
fetch("https://rickandmortyapi.com/api/character/1")
  .then((response) => {
    return response.json();
    // response.json()
  })
  .then((data) => {
    console.log(data);
    imgCard.src = data.image;
    titleCard.innerText = data.name;
    textCard.innerHTML = `
        <ul>
            <li>Estado:${data.status}</li>
            <li>Especie:${data.species}</li>
        </ul>
      `;
  });
