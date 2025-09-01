let token
document.addEventListener("DOMContentLoaded", () =>{
  token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  console.log(token)
})
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
    const path = window.location.pathname; // "/infoPersonaje/1"
    const parts = path.split('/');
    const id = parts[parts.length - 1]; // "1"

    let pop = document.querySelector(".pop-up-info");
    let print = document.querySelector(".select");
    let lis = ['detalles', 'historia 1', 'historia 2', 'historia 3', 'historia 4', 'historia 5', 'vision']
    let i = 0
    pop.style.display = "flex"

    lis.forEach(li =>{
        let div = document.createElement("div");
        div.classList.add("option");
        div.innerHTML = `<p>${li}</p>`;

        print.appendChild(div);
    })

    fetch(`/infoPersonaje/${id}/info`)
    .then(data => data.json())
    .then(data =>{
      info_pj = data;
      document.querySelector(".pj-text").innerHTML = `<p>${data[0].detalles}</p>`
    });
});

document.addEventListener("DOMContentLoaded", artefactos);

function artefactos(){
  fetch('/artefacto')
  .then(data => data.json())
  .then(data =>{
    data.forEach(art => {
      let div = document.createElement('div');
      div.classList.add('art-item');
      div.innerHTML = `
      <p>Set recomendado</p>
      <div class="art-color">
        <img src="${art.art_url}">
        <p>${art.nombre_set}</p>
      </div>
      <div></div>`
      console.log(data)
      document.getElementById('artefact').appendChild(div);
    })
  })
}



