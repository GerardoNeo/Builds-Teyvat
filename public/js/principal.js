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



