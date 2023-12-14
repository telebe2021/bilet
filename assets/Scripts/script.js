


window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        document.querySelector("nav").style.backgroundColor="rgba(0,0,0,0.7)"
    }
    else{
        document.querySelector("nav").style.backgroundColor="rgba(0,0,0,0)"
    }
})

fetch("http://localhost:3000/card")
.then(res =>res.json())
.then(data => {
        console.log(data);
        data.forEach(card => {
            document.querySelector(".uclu").innerHTML+=`<div class="sec11">
        
            <i class="bi bi-heart"></i>
            <img src="${card.image}" alt="">
            <a href="#"><h4>${card.link}</h4></a>
            <p>${card.text}</p>
            <span> <a href" ../delete.html?id${card.id}<button><i class="bi bi-trash"></i> delete</button></a> 
        
            <a href" ../Update.html?id${card.id}<button><i class="bi bi-arrow-repeat"></i> update</button></a>
        
            <a href" ../info.html?id${card.id}<button><i class="bi bi-info-circle-fill"></i> info</button></a>
            </span>
           
        </div>`

    });
})

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
  
  // Her bir kartın bilgilerini göster
  function showCardInfo(card) {
    const infoContainer = document.getElementById("infoContainer");
    infoContainer.innerHTML = `
      <h2>ID: ${card.id}</h2>
      <img src="${card.image}" alt="Card Image">
      <h3>${card.link}</h3>
      <p>${card.text}</p>
    `;
  }
  
  // Arama alanındaki değeri dinle ve tabloyu filtrele
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
  
    // Filtreleme işlemi
    const filteredCards = jsonData.card.filter(card => {
      return card.link.toLowerCase().includes(searchText);
    });
  
    // Filtrelenmiş kartları göster
    const searchResultsContainer = document.getElementById("searchResultsContainer");
    searchResultsContainer.innerHTML = "";
    filteredCards.forEach(filteredCard => {
      const filteredCardElement = createCardElement(filteredCard);
      searchResultsContainer.appendChild(filteredCardElement);
    });
  });
  
function addEventListener(id) {
    axios.get("http://localhost:3000/boxs/"+id)
    .then(res=>{
        axios.post("http://localhost:3000/favorites",res.data)
    })
}