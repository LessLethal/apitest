let button = document.querySelector("#generateButton");
let image = document.querySelector("#generatedImage");
let loadingMessage = document.querySelector("#loadingMessage");

let button2 = document.querySelector("#generateButtonCards");
let cards = document.querySelector("#cardContainer");

async function addImage() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const data = await response.json();
  return data;
}

async function displayName() {
  const data = await addImage();
  console.log(data.name);
}

displayName();

async function addCat() {
  const response2 = await fetch(
    "https://cataas.com/cat/says/Work in silence and let your success speak?"
  );
  const data2 = await response2.blob();
  return data2;
}

async function displayCatImage() {
  const data2 = await addCat();
  image.src = URL.createObjectURL(data2);
}

async function addCard() {
  const response4 = await fetch(
    `https://www.deckofcardsapi.com/api/deck/new/draw/?count=3`
  );
  const data4 = await response4.json();
  return data4.cards;
}

async function displayCards() {
  const cardsAdd = await addCard();
  cards.innerHTML = "";
  for (let i = 0; i < cardsAdd.length; i++) {
    const cardImg = document.createElement("img");
    cardImg.src = cardsAdd[i].image;
    cards.appendChild(cardImg);
  }
}

async function handleDrawClick() {
  loadingMessage.style.display = "block";
  await displayCards();
  loadingMessage.style.display = "none";
}

async function handleButtonClick() {
  loadingMessage.style.display = "block";
  await displayCatImage();
  loadingMessage.style.display = "none";
}

button.addEventListener("click", handleButtonClick);
button2.addEventListener("click", handleDrawClick);
