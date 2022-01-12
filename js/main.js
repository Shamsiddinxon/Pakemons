let elList = document.querySelector(".card-box");

for (let pokemon of pokemons) {

  //CREATE
  let newCard = document.createElement("div");
  let newImgBox = document.createElement("div");
//   let newImgBox = document.createElement("div");
  let newImg = document.createElement("img");
  let newCardTitleBox = document.createElement("div");
  let newImgHeart = document.createElement("img");
  let newCardTitle = document.createElement("h4");
  let newCardDesc = document.createElement("p");
  let newCardBottom = document.createElement("div");
  let newCardKg = document.createElement("h5");
  let newCardage = document.createElement("h5");

  //SET ATTRIBUTE
  newCard.setAttribute("class", "card p-0");
  newImg.setAttribute("src", pokemon.img);
  newImgBox.setAttribute("class", "card-img-box");
  newImg.setAttribute("width", "157");
  newCardTitleBox.setAttribute("class", "card-title-box");
  newImgHeart.setAttribute("class", "heart");
  newImgHeart.setAttribute("src", "../images/icon.png");
  newCardTitle.setAttribute("class", "card-title");
  newCardDesc.setAttribute("class", "card-desc");
  newCardBottom.setAttribute("class", "card-buttom");
  newCardKg.setAttribute("class", "card-kg");
  newCardage.setAttribute("class", "card-age");

  //TEXT CONTENT
  newCardTitle.textContent = pokemon.name;
  newCardDesc.textContent = pokemon.candy;
  newCardKg.textContent = pokemon.weight;
  newCardage.textContent = `time: ${pokemon.spawn_time}`;

  //APPEND
  elList.appendChild(newCard);
  newCard.appendChild(newImgBox);
  newImgBox.appendChild(newImg);
  newCard.appendChild(newCardTitleBox)
  newCardTitleBox.appendChild(newImgHeart)
  newCardTitleBox.appendChild(newCardTitle)
  newCardTitleBox.appendChild(newCardDesc)
  newCard.appendChild(newCardBottom)
  newCardBottom.appendChild(newCardKg)
  newCardBottom.appendChild(newCardage)
}
