document.addEventListener("DOMContentLoaded", ()=>{
    let print = document.querySelector(".elements");
    let list = ["Anemo","Cryo","Geo","Pyro","Dendro","Hydro","Electro"]
    let i
    for(i = 0; i < list.length; i++){
        let div = document.createElement("div")
        div.classList.add("element");
        div.innerHTML = `<h1>${list[i]}</h1>`;

        print.appendChild(div);
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    let print = document.querySelector(".weapons");
    let list = ["Mandoble","Arco","Lanza","Espada l","Catalizador"]
    let i
    for(i = 0; i < list.length; i++){
        let div = document.createElement("div")
        div.classList.add("element");
        div.innerHTML = `<h1>${list[i]}</h1>`;

        print.appendChild(div);
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    let print = document.querySelector(".cat-row2");
    let list = ["Furina","Hu tao","Scoffier","Citlali","Bennet","Yoimiya","Xiangling","Tartaglia","Charlote","Neuvillete",
        "Mavuika","Iansan","Varesa","Shenhe","Yelan"]
    let i
    for(i = 0; i < list.length; i++){
        let div = document.createElement("div")
        div.classList.add("pj");
        div.innerHTML = `
        <div class="font"></div>
        <h1>${list[i]}</h1>`;

        print.appendChild(div);
    }
})

let filtro = document.querySelector(".search");

filtro.addEventListener("input", ()=>{
    let pjs = document.querySelectorAll(".pj");

    pjs.forEach(pj =>{
        if(pj.querySelector("h1").textContent.toLowerCase().includes(filtro.value.toLowerCase())){
            pj.style.display = "flex";
        }else{
            pj.style.display = "none";
        }
    })
})