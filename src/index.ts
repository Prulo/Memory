const cards = document.querySelectorAll(".memory-card");

let canFlip = true;

cards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("flip");
    compareCards();
  });
});

function shuffleCards() {
  const memoryCards = document.querySelector(".memory-cards");
  if (memoryCards) {
    const cardsArray = Array.from(memoryCards.children);

    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      memoryCards.appendChild(cardsArray[j]);
    }
  }
}

function compareCards() {
  const flippedCards: NodeListOf<Element> = document.querySelectorAll(".flip");

  if (flippedCards.length === 2) {
    canFlip = false;

    const cardOne: string = flippedCards[0].getAttribute("data-card");
    const cardTwo: string = flippedCards[1].getAttribute("data-card");

    if (cardOne === cardTwo) {
      setTimeout(() => {
        flippedCards.forEach((card) => card.remove());
        canFlip = true;
if (areAllCardsGone()) {
  win(); // Call the win function or perform any other action when all cards are gone
}


      }, 1000);
    } else {
      setTimeout(() => {
        flippedCards.forEach((card) => card.classList.remove("flip"));
        canFlip = true;
      }, 1000);
    }
  }
}

function areAllCardsGone(): boolean {
  const remainingCards = document.querySelectorAll(".memory-card");
  return remainingCards.length === 0;
}


function win() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.classList.add("show");
  }
}

shuffleCards();
