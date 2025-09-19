let aux_id
document.addEventListener("DOMContentLoaded", conseguir_comentarios(), info_user(), edit(), estado(), pj())

function edit(){
    if(localStorage.getItem("session")){
        let path = window.location.pathname;
        let parts = path.split('/');
        let id = parts[parts.length - 1];
        if(JSON.parse(localStorage.getItem("session")).id == id){ 
            document.querySelector(".btn-change").style.display = "flex"
            document.querySelector(".btn-op").style.display = "flex"
            document.querySelector(".btn-edit-perfil").style.display = "flex"

        }else{
            document.querySelector(".btn-change").style.display = "none"
            document.querySelector(".btn-op").style.display = "none"
            document.querySelector(".btn-edit-perfil").style.display = "none"
        }
    }else{
        document.querySelector(".btn-change").style.display = "none"
        document.querySelector(".btn-op").style.display = "none"
        document.querySelector(".btn-edit-perfil").style.display = "none"
    }
}

document.querySelector(".btn-back").addEventListener("click", () => {
    window.location.href = localStorage.getItem("last")
})

document.getElementById("btn-close").addEventListener("click", ()=>{
    if(localStorage.getItem("session")){
        localStorage.removeItem("session")
        edit()
        estado()
    }else{
        console.log("no hay session")
    }
})

function conseguir_comentarios(){
    let path = window.location.pathname;
    let parts = path.split('/');
    let id = parts[parts.length - 1];
    fetch(`/comentario/${id}`)
    .then(data => data.json())
    .then(data =>{
        let print = document.querySelector(".print-comment")
        print.innerHTML = ""
        console.log(data)
        let comment = data
        let div = document.createElement("div");
        div.classList.add("comment");
        div.innerHTML = `
        <div class="img-profile">
            <img src="${comment.foto_url}">
        </div>
        <div class="text-comment">
            <div class="name-comment">
            <p>${comment.nombre_usuario}</p>
            <div class="line"></div>
            </div>
            <div class="content-comment">
            <p>${comment.texto}</p>
            </div>
        </div>
        <div class="like-comment"></div>`

        print.appendChild(div)
    })
}

function info_user(){
    let path = window.location.pathname;
    let parts = path.split('/');
    let id = parts[parts.length - 1];
    fetch(`/infoUsuario/${id}`)
    .then(data => data.json())
    .then(data =>{
        console.log(data)
        document.querySelector(".info-content-perfil").innerHTML = `
        <p>Edad: ${data.edad}</p>
        <p>Numero de comentarios: ${data.total}</p>
        <p>Personaje favorito: ${data.pj_fav}</p>
        `;

        document.querySelector(".img-content").innerHTML = `
        <img src="${data.foto_url}">
        `;

        document.querySelector(".name p").textContent = data.nombre_usuario
    })
}

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
                    edit()
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
                    edit()
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

document.getElementById("create-log").addEventListener("click", ()=>{
  window.location.href = "/"
})

document.querySelector(".btn-change").addEventListener("click", ()=>{
    document.querySelector(".pop-up-img").style.display = "flex"
})

document.querySelector(".close-img").addEventListener("click", ()=>{
    document.querySelector(".pop-up-img").style.display = "none"
})

function pj(){
    let print = document.querySelector(".print-content");
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
            div.id = pj.id;
            div.setAttribute("foto", pj.poster_url)
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
}

let search = document.querySelector(".search");
search.addEventListener("input", ()=>{
    let pjs = document.querySelectorAll(".pj");
    pjs.forEach(pj => {
        let idElemento = pj.querySelector(".font-content").id;
        let idArma = pj.querySelector(".nombre-content").id;

        if(pj.querySelector("p").textContent.toLowerCase().includes(search.value.toLowerCase())){
            pj.style.display = "flex";
        }else{
            pj.style.display = "none";
        }
    });
})

document.querySelector(".print-content").addEventListener("click", (e) => {
    let path = window.location.pathname;
    let parts = path.split('/');
    let id = parts[parts.length - 1];
    aux_id ={
        id_usuario: id,
        foto: e.target.closest(".pj").getAttribute("foto")
    } 

    console.log(aux_id)
});

document.querySelector(".btn-img").addEventListener("click", ()=>{
    fetch("/nuevaFoto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify(aux_id)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        info_user();
        conseguir_comentarios();
        document.querySelector(".pop-up-img").style.display = "none"
    })
})