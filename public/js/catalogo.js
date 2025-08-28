let listFil = [];
let listArma = [];
let element = ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro', 'Cryo']
let weapon = ['Espada ligera', 'Arco', 'Lanza', 'Mandoble', 'Catalizador']

document.querySelectorAll(".item").forEach(item =>{
    item.addEventListener("click", () => {
        let pjs = document.querySelectorAll(".pj");
        let filtro = item.querySelector("p").textContent;
        console.log("click")
        if (item.classList.contains("activo")) {
            item.classList.remove("activo");
            if (element.includes(filtro)) {
                listFil = listFil.filter(f => f !== filtro);
            } else if (weapon.includes(filtro)) {
                listArma = listArma.filter(f => f !== filtro);
            }
        } else {
            item.classList.add("activo");
            if (element.includes(filtro)) {
                listFil.push(filtro);
            } else if (weapon.includes(filtro)) {
                listArma.push(filtro);
            }
        }

        pjs.forEach(pj => {
            let idElemento = pj.querySelector(".font-content").id;
            let idArma = pj.querySelector(".nombre-content").id;

            if(((listFil.length === 0 || listFil.includes(idElemento)) &&
                (listArma.length === 0 || listArma.includes(idArma))) && 
                pj.querySelector("p").textContent.toLowerCase().includes(search.value.toLowerCase())){
                pj.style.display = "flex";
            }else{
                pj.style.display = "none";
            }
        });
        console.log(listFil)
        console.log(listArma)
    })
});

document.addEventListener("DOMContentLoaded", ()=>{
    let print = document.querySelector(".list-pj");
    fetch("/catalogo/list")
    .then(data => data.json())
    .then(data =>{
        console.log(data)
        data.forEach(pj =>{
            let div = document.createElement("div")
            div.classList.add("pj");
            div.id = pj.id_personaje;
            if(pj.nombre.length >= 10){
                let partes = pj.nombre.split(" ");
                div.innerHTML = `
                <div class="font-content"  id="${pj.nombre_ele}">
                    <div class="font-${pj.nombre_ele.toLowerCase()}">
                        <img src="${pj.poster_url}">
                    </div>
                </div>
                <div class="nombre-content" id="${pj.nombre_tp}">
                    <div class="nombre-pj">
                        <p>${partes[1] + "..."}</p>
                    </div>
                </div>
                `;
            }else{
                div.innerHTML = `
                <div class="font-content"  id="${pj.nombre_ele}">
                    <div class="font-${pj.nombre_ele.toLowerCase()}">
                        <img src="${pj.poster_url}">
                    </div>
                </div>
                <div class="nombre-content" id="${pj.nombre_tp}">
                    <div class="nombre-pj">
                        <p>${pj.nombre}</p>
                    </div>
                </div>
                `;
            }
            
            print.appendChild(div);
        })
    })
})

let search = document.querySelector(".search");

search.addEventListener("input", ()=>{
    let pjs = document.querySelectorAll(".pj");
    pjs.forEach(pj => {
        let idElemento = pj.querySelector(".font-content").id;
        let idArma = pj.querySelector(".nombre-content").id;

        if(((listFil.length === 0 || listFil.includes(idElemento)) &&
            (listArma.length === 0 || listArma.includes(idArma))) && 
            pj.querySelector("p").textContent.toLowerCase().includes(search.value.toLowerCase())){
            pj.style.display = "flex";
        }else{
            pj.style.display = "none";
        }
    });
})
//redireccion provicional
document.querySelector(".list-pj").addEventListener("click", (e) => {
    let id = e.target.closest(".pj").id;

    if (e.target.closest(".pj")) {
        window.location.href = `/infoPersonaje/${id}`;
    }
});
