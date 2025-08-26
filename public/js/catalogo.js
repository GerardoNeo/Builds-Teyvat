document.addEventListener("DOMContentLoaded", ()=>{
    let print = document.querySelector("#element");
    let list = ["Anemo","Cryo","Geo","Pyro","Dendro","Hydro","Electro"]
    let i
    for(i = 0; i < list.length; i++){
        let div = document.createElement("div")
        div.classList.add("item");
        div.innerHTML = `<p>${list[i]}</p>`;

        print.appendChild(div);
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    let print = document.querySelector("#weapon");
    let list = ["Mandoble","Arco","Lanza","Espada l","Catalizador"]
    let i
    for(i = 0; i < list.length; i++){
        let div = document.createElement("div")
        div.classList.add("item");
        div.innerHTML = `<p>${list[i]}</p>`;

        print.appendChild(div);
    }
})
/*
document.addEventListener("DOMContentLoaded", ()=>{
    let print = document.querySelector(".list-pj");
    let list = ["Furina","Hu tao","Scoffier","Citlali","Bennet","Yoimiya","Xiangling","Tartaglia","Charlote","Neuvillete",
        "Mavuika","Iansan","Varesa","Shenhe","Yelan"]
    let i
    for(i = 0; i < list.length; i++){
        let div = document.createElement("div")
        div.classList.add("pj");
        div.innerHTML = `
        <div class="font"></div>
        <p>${list[i]}</p>`;

        print.appendChild(div);
    }
})
*/

document.addEventListener("DOMContentLoaded", ()=>{
    let print = document.querySelector(".list-pj");
    /*let list = ["Furina","Hu tao","Scoffier","Citlali","Bennet","Yoimiya","Xiangling","Tartaglia","Charlote","Neuvillete",
        "Mavuika","Iansan","Varesa","Shenhe","Yelan"]
    let i
    for(i = 0; i < list.length; i++){
        let div = document.createElement("div")
        div.classList.add("pj");
        div.innerHTML = `
        <div class="font"></div>
        <p>${list[i]}</p>`;

        print.appendChild(div);
    }*/
    fetch("/catalogo/list")
    .then(data => data.json())
    .then(data =>{
        //console.log(data)
        data.forEach(pj =>{
            let div = document.createElement("div")
            div.classList.add("pj");
            div.innerHTML = `
            <div class="font"></div>
            <p>${pj.nombre}</p>`;

            print.appendChild(div);
        })
    })
})

let filtro = document.querySelector(".search");

filtro.addEventListener("input", ()=>{
    let pjs = document.querySelectorAll(".pj");

    pjs.forEach(pj =>{
        if(pj.querySelector("p").textContent.toLowerCase().includes(filtro.value.toLowerCase())){
            pj.style.display = "flex";
        }else{
            pj.style.display = "none";
        }
    })
})
let id = 1
//redireccion provicional
document.querySelector(".list-pj").addEventListener("click", (e) => {
    //const pjDiv = e.target.closest(".pj");

    if (e.target.closest(".pj")) {
        window.location.href = `/infoPersonaje${id}`;
    }
});
