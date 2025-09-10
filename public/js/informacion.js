document.addEventListener("DOMContentLoaded", conseguir_info())

function conseguir_info(){
  let path = window.location.pathname;
  let parts = path.split('/');
  let id = parts[parts.length - 1];

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
    print.appendChild(div)

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

document.addEventListener("DOMContentLoaded", artefactos);

function artefactos(){
  fetch('/artefacto')
  .then(data => data.json())
  .then(data =>{
    data.forEach(art => {
      document.getElementById('artefact').innerHTML = `
      <p>Sets recomendados</p>
      <div class="art-color">
        <img src="${art.art_url}">
        <p>${art.nombre_set}</p>
      </div>
      <div class="option-content">
        <div class="op-btn" id="btn-izq">
          <i class='bx bx-left-arrow-alt'></i>
        </div>
        <div class="op-btn" id="btn-med">
          <i class='bx bxs-star'></i>
        </div>
        <div class="op-btn" id="btn-der">
          <i class='bx bx-right-arrow-alt'></i>
        </div>
      </div>
      `
      document.getElementById('weapon').innerHTML = `
      <p>Sets recomendados</p>
      <div class="art-color">
        <img src="${art.art_url}">
        <p>${art.nombre_set}</p>
      </div>
      <div class="option-content">
        <div class="op-btn" id="btn-izq">
          <i class='bx bx-left-arrow-alt'></i>
        </div>
        <div class="op-btn" id="btn-med">
          <i class='bx bxs-star'></i>
        </div>
        <div class="op-btn" id="btn-der">
          <i class='bx bx-right-arrow-alt'></i>
        </div>
      </div>
      `
    })
  })
}



