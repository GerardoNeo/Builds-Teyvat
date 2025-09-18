let pj;
let arte;
let arma;
let voto = null;
let flag = "pj"
document.addEventListener("DOMContentLoaded", ()=>{
  conseguir_info();
  conseguir_comentarios();
  arma_recomendadas();
  artefactos_recomendados();
  artefactos();
})
  

function conseguir_comentarios(){
  //localStorage.removeItem("session")
  let path = window.location.pathname;
  let parts = path.split('/');
  let id = parts[parts.length - 1];

  fetch(`/comments/${id}`)
  .then(data => data.json())
  .then(data =>{
    console.log(data)
    data.forEach(comment =>{
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

      document.querySelector(".comment-content").appendChild(div)
    })
  })
}

function conseguir_info(){
  let path = window.location.pathname;
  let parts = path.split('/');
  let id = parts[parts.length - 1];
  pj = id;
  console.log(id)

  fetch(`/infoPersonaje/${id}/info`)
  .then(data => data.json())
  .then(data =>{
    console.log(data)
    let print = document.querySelector(".pj-row");
    let div = document.createElement("div");
    div.classList.add("pj-content");
    if(data.estrellas == 4){
      div.innerHTML = ` 
      <div class="pj-content-row1">
        <span>${data.nombre}</span>
        <div class="star-content">
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
        </div>
      </div>
      <div class="font ${data.nombre_ele.toLowerCase()}">
        <img src="${data.banner_url}">
      </div>
      <div class="pj-content-row2">
        <p>Puntuacion de la comunidad: 45</p>
      </div>
      `
    }else{
      div.innerHTML = ` 
      <div class="pj-content-row1">
        <span>${data.nombre}</span>
        <div class="star-content">
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
        </div>
      </div>
      <div class="font ${data.nombre_ele.toLowerCase()}">
        <img src="${data.banner_url}">
      </div>
      <div class="pj-content-row2">
        <span></span>
      </div>
      `
    }
    console.log(data)
    document.querySelector(".perso").classList.add(data.nombre_ele.toLowerCase())
    document.querySelector(".perso").innerHTML = `<img src="${data.poster_url}">`
    document.querySelector(".artefacto").innerHTML = `<img src="${data.icon_url}">`
    document.querySelector(".column3-voto-content").innerHTML =`<img src= "${data.poster_url}">`

    print.appendChild(div)

    armas(data.id_tp_arma);
    info_pj = data;
    document.querySelector(".pj-text").innerHTML = `<div class="text">${data.detalles.replace(/\\n/g, '<br>')}</div>`;

  });
}

let op = document.querySelectorAll(".equip-img");

op.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    const id = e.currentTarget.id;
    console.log("Click en imagen con ID:", id);

    if (!document.querySelector('.popup-info')) {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="popup-info">
            <div class="info-content">
                <h1 class="close-popup">X</h1>
                <div class="info-pop">
                  <div class="popup-row1">
                    <div class="row-img">
                    
                    </div>
                    <div class="row-info">
                      
                    </div>
                  </div>
                  <div class="popup-row2">
                    <div class="popup-colum1">
                    
                    </div>
                    <div class="popup-colum2">
                    
                    </div>
                  </div>
                </div>
            </div>
        </div>
        `);
    }
    });

});

function artefactos(){
  fetch('/artefacto')
  .then(data => data.json())
  .then(data =>{
    arte = data
  })
}

function armas(id){
  fetch(`/arma/${id}`)
  .then(data => data.json())
  .then(data =>{
    arma = data
  })
}

document.querySelectorAll(".op-voto").forEach(op =>{
  op.addEventListener("click", () => {
    if(op.id == "pj"){
      flag = "pj"
      document.querySelector(".voto-column2").style.display = "none";
      document.querySelector(".voto-column3").style.display = "flex";
    }else{
      if(op.id == "arma"){
        flag = "arma";
        document.querySelector(".voto-column2").style.display = "flex";
        document.querySelector(".voto-column3").style.display = "none";
        let print = document.querySelector(".voto-print");
        print.innerHTML = ""
        arma.forEach(art => {
          let div = document.createElement("div");
          div.classList.add("artefacto-voto");
          if(art.num_est == 5){
            div.innerHTML = `
            <div class="art-op" id="${art.id_arma}">
                <img src="${art.arma_url}" class="cinco">
                <p>${art.nombre_arma}</p>
            </div>
            `;
          }else{
            div.innerHTML = `
            <div class="art-op" id="${art.id_arma}">
                <img src="${art.arma_url}" class="cuatro">
                <p>${art.nombre_arma}</p>
            </div>
            `;
          }

          print.appendChild(div);
        })
      }else{
        flag = "artefacto";
        document.querySelector(".voto-column2").style.display = "flex";
        document.querySelector(".voto-column3").style.display = "none";
        let print = document.querySelector(".voto-print");
        print.innerHTML = ""
        arte.forEach(art => {
          let div = document.createElement("div");
          div.classList.add("artefacto-voto");
          div.innerHTML = `
          <div class="art-op" id="${art.id_art}">
              <img src="${art.art_url}" class="cinco">
              <p>${art.nombre_set}</p>
          </div>
          `;

          print.appendChild(div);
        })
      }
    }
  })
})

document.querySelector(".voto-print").addEventListener("click", (e) => {
  let art = e.target.closest(".art-op");
  if(!art){
    return;
  }
  document.querySelectorAll(".art-op.on").forEach(el => el.classList.remove("on"));
  art.classList.add("on")
  voto = art.id;
});

document.querySelector('.btn-confirm-voto').addEventListener('click', () =>{
  let path = window.location.pathname;
  let parts = path.split('/');
  let id = parts[parts.length - 1];
  if(localStorage.getItem("session")){
    switch(flag)
    {
      case "pj":
        if(voto != null){
          console.log(JSON.parse(localStorage.getItem("session")).id + " " + flag +" "+ voto)

        }else{
          alert("elige una opcion")
        }
        break
      case "arma":
        if(voto != null){
          console.log(JSON.parse(localStorage.getItem("session")).id + " " + flag +" "+ voto+" "+ id)
          fetch("/votoArma", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
              },
              body: JSON.stringify({
                  id_usuario: JSON.parse(localStorage.getItem("session")).id,
                  id_arma: voto,
                  id_personaje: id
                }
              )
          });
        }else{
          alert("elige una opcion")
        }
        break;
      case "artefacto":
        if(voto != null){
          console.log(JSON.parse(localStorage.getItem("session")).id + " " + flag +" "+ voto +" "+ id)
          fetch("/votoSet", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
              },
              body: JSON.stringify({
                  id_usuario: JSON.parse(localStorage.getItem("session")).id,
                  id_art: voto,
                  id_personaje: id
                }
              )
          });
        }else{
          alert("elige una opcion")
        }
        break;
    }
  }else{
    alert("inicia session")
  }
})

document.addEventListener('click', function (e) {
  if (e.target.matches(".close-popup")) {
    e.target.closest(".popup-info").remove();
  }
});

document.querySelector(".btn-back").addEventListener("click", ()=>{
  window.location.href = "/catalogo"
});

let info_pj;

document.querySelector(".btn-more").addEventListener("click", () => {
    let pop = document.querySelector(".pop-up-info");
    pop.style.display = "flex"
});

document.querySelector(".btn-voto").addEventListener("click", () => {
    let pop = document.querySelector(".pop-up-voto");
    pop.style.display = "flex"
});

document.querySelector(".close-btn-voto").addEventListener("click", () =>{
  document.querySelector(".pop-up-voto").style.display = "none"
});

document.querySelectorAll(".option").forEach(op => {
  
  op.addEventListener("click", () => {
    document.querySelectorAll(".option.on").forEach(active => {
      active.classList.remove("on");
    });
    op.classList.add("on");
    //console.log("click");
    const campo = op.getAttribute("data-campo");
    document.querySelector(".pj-text").innerHTML = `<div class="text">${info_pj[campo].replace(/\\n/g, '<br>')}</div>`;
  })
})

document.querySelector(".close-btn").addEventListener("click", () =>{
  document.querySelector(".pop-up-info").style.display = "none"
});

function arma_recomendadas(){
  let path = window.location.pathname;
  let parts = path.split('/');
  let id = parts[parts.length - 1];
  fetch(`/arma_recomendada/${id}`)
  .then(data => data.json())
  .then(data =>{
    console.log(data)
    data.forEach(art => {
      document.getElementById('weapon').innerHTML = `
      <p>Armas</p>
      <div class="art-color">
        <img src="${art.arma_url}">
        <p>${art.nombre_arma}</p>
      </div>
      <div class="option-content">
        <div class="op-btn" id="btn-izq-wea">
          <i class='bx bx-left-arrow-alt'></i>
        </div>
        <div class="op-btn" id="btn-med-wea">
          <i class='bx bxs-star'></i>
        </div>
        <div class="op-btn" id="btn-der-wea">
          <i class='bx bx-right-arrow-alt'></i>
        </div>
      </div>
      `
    })
  })
}

function artefactos_recomendados(){
  let path = window.location.pathname;
  let parts = path.split('/');
  let id = parts[parts.length - 1];
  fetch(`/artefacto_recomendado/${id}`)
  .then(data => data.json())
  .then(data =>{
    console.log(data)
    data.forEach(art => {
      document.getElementById('artefact').innerHTML = `
      <p>Sets recomendados</p>
      <div class="art-color">
        <img src="${art.art_url}">
        <p>${art.nombre_set}</p>
      </div>
      <div class="option-content">
        <div class="op-btn" id="btn-izq-art">
          <i class='bx bx-left-arrow-alt'></i>
        </div>
        <div class="op-btn" id="btn-med-art">
          <i class='bx bxs-star'></i>
        </div>
        <div class="op-btn" id="btn-der-art">
          <i class='bx bx-right-arrow-alt'></i>
        </div>
      </div>
      `
    })
  })
}

document.querySelector(".btn-comment").addEventListener("click", () =>{
  let aux = document.getElementById("new-comment");
  if(localStorage.getItem("session")){
    if(aux.value == ''){
      alert("escriba algo, no mame")
    }else{
      id_usuario = localStorage.getItem("session");
      id_usuario = JSON.parse(id_usuario).id;
      console.log(id_usuario)
      comment ={
        autor: id_usuario,
        pj: pj,
        text: aux.value
      }
      //console.log(comment)
      newcomment(comment)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        aux.value = ""
        conseguir_comentarios();
      });
    }
  }else{
    alert("Inisia sesion")
  }
})

function newcomment(comment){
    return fetch("/newComment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify(comment)
    });
}

function getDateTime() {
  const now = new Date();

  const year   = now.getFullYear();
  const month  = String(now.getMonth() + 1).padStart(2, '0');
  const day    = String(now.getDate()).padStart(2, '0');

  const hours   = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


