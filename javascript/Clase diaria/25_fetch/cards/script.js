const cards = document.getElementById("cards");

fetch("https://rickandmortyapi.com/api/character/")
  .then((response) => {
    return response.json();
    // response.json()
  })
  .then((data) => {
    console.log(data.results);
    const newCards = data.results.reduce((html, newCard) => {
      return (
        html +
        `
        <div class="card" style="width: 18rem;">
          <img src="${newCard.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${newCard.name}</h5>
            <p class="card-text" >
              <ul>
                <li>Estado: ${newCard.status} </li>
                <li>Especie: ${newCard.species}</li>
                <li>Genero: ${newCard.gender}</li>
              </ul>
            </p>
          </div>
        </div>
      `
      );
    }, "");

    cards.innerHTML = newCards;
  });
/* <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." id="imgCard" />
        <div class="card-body">
          <h5 class="card-title" id="titleCard">Card title</h5>
          <p class="card-text" id="textCard"></p>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div> */
