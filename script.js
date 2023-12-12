


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