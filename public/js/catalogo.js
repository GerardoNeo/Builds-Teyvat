let listFil = [];
let listArma = [];
let element = ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro', 'Cryo']
let weapon = ['Espada ligera', 'Arco', 'Lanza', 'Mandoble', 'Catalizador']

document.addEventListener("DOMContentLoaded", estado(), last())

function last(){
    localStorage.setItem("last", "/catalogo");
}

function estado(){
    let data = localStorage.getItem("session");
    if (data) {
        document.getElementById("ver-perfil").style.display = "flex"
        document.getElementById("cerrar-session").style.display = "flex"
        document.getElementById("iniciar-session").style.display = "none"
    } else {
        document.getElementById("ver-perfil").style.display = "none"
        document.getElementById("cerrar-session").style.display = "none"
        document.getElementById("iniciar-session").style.display = "flex"
    }
}

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
            if(pj.estrellas == 4){
                div.classList.add("cuatro");
            }else{
                div.classList.add("cinco");
            }
            div.id = pj.id_personaje;
            if(pj.nombre.length > 11){
                let partes = pj.nombre.split(" ");
                div.innerHTML = `
                <div class="font-content"  id="${pj.nombre_ele}">
                    <div class="font ${pj.nombre_ele.toLowerCase()}">
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
                    <div class="font ${pj.nombre_ele.toLowerCase()}">
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

document.querySelector(".login").addEventListener("click", () =>{
    document.querySelector(".pop-up-perfil").style.display = "flex";
});

document.querySelector(".perfil-close").addEventListener("click", () =>{
    document.querySelector(".pop-up-perfil").style.display = "none";
});

document.getElementById("iniciar-session").addEventListener("click", () =>{
    document.querySelector(".pop-up-perfil").style.display = "none";
    document.querySelector(".pop-up-login").style.display = "flex"
});

document.getElementById("cerrar-session").addEventListener("click", () =>{
    let data = localStorage.getItem("session");
    if (data) {
        localStorage.removeItem("session")
        document.querySelector(".pop-up-perfil").style.display = "none";
        estado()
    } else {
        console.log("No hay sesión activa");
    }
});

document.getElementById("ver-perfil").addEventListener("click", () =>{
    let data = localStorage.getItem("session");
    console.log(JSON.parse(data).id)
    if(data){
        document.querySelector(".pop-up-perfil").style.display = "none";
        window.location.href = `/perfil/${JSON.parse(data).id}`;
    }else{
        console.log("No hay sesión activa");
    }
});

document.querySelector(".btn-pop-login").addEventListener("click", () => {
    inf = {
        name: document.getElementById("pop-correo").value,
        pass: document.getElementById("pop-contra").value
    }
    console.log(inf)

    if(inf.name != "" && inf.pass != ""){
        let exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(exp.test(inf.name)){
            acceder(inf)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.state === true){
                    localStorage.setItem("session", JSON.stringify(data.user));
                    document.querySelector(".pop-up-login").style.display = "none"
                    estado()
                }
            });
        }else{
            acceder(inf)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.state === true){
                    localStorage.setItem("session", JSON.stringify(data.user));
                    document.querySelector(".pop-up-login").style.display = "none"
                    estado()
                }
            });
        }
    }else{
        alert("todos los inputs deben ser rellenados");
    }
})

function acceder(data){
    return fetch("/login/in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify(data)
    });
}

document.querySelector(".btn-login-close").addEventListener("click", () =>{
  document.querySelector(".pop-up-login").style.display = "none"
});

document.getElementById("create-log").addEventListener("click", ()=>{
  window.location.href = "/"
})