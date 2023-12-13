function createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.id = card.id;
    cardElement.innerHTML = `
      <img src="${card.image}" alt="Card Image">
      <h3>${card.link}</h3>
    `;
    cardElement.addEventListener("click", () => showCardInfo(card));
    return cardElement;
  }
  
  function showCardInfo(card) {
    const infoContainer = document.getElementById("infoContainer");
    infoContainer.innerHTML = `
      <h2>ID: ${card.id}</h2>
      <img src="${card.image}" alt="Card Image">
      <h3>${card.link}</h3>
      <p>${card.text}</p>
    `;
  }
  
  const cardArray = jsonData.card;
  
  const cardContainer = document.getElementById("cardContainer");
  cardArray.forEach(card => {
    const cardElement = createCardElement(card);
    cardContainer.appendChild(cardElement);
  });