//document.addEventListener("DOMContentLoaded", conseguir_comentarios())

document.getElementById("btn-close").addEventListener("click", ()=>{
    if(localStorage.getItem("session")){
        localStorage.removeItem("session")
    }else{
        console.log("no hay session")
    }
})

function conseguir_comentarios(){
    let path = window.location.pathname;
    let parts = path.split('/');
    let id = parts[parts.length - 1];
    fetch(`/comments/${1}`)
    .then(data => data.json())
    .then(data =>{
    //console.log(data)
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

        document.querySelector(".print-comment").appendChild(div)
        })
    })
}