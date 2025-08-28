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


document.querySelector(".btn-more").addEventListener("click", () => {
    const path = window.location.pathname; // "/infoPersonaje/1"
    const parts = path.split('/');
    const id = parts[parts.length - 1]; // "1"

    fetch('/infoPersonaje', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ id: id })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Error:', err));

});




