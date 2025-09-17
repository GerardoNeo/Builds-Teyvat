//Session
document.addEventListener("DOMContentLoaded",()=>{
    let status = localStorage.getItem("session");
    if(status){
        window.location.href = "/catalogo"
    }else{
        console.log("no hay session")
    }
})

let aux;
let inf;
let flag = false;

document.querySelectorAll(".change").forEach(changeBtn => {
    changeBtn.addEventListener("click", () => {
        if(flag === false){
            document.querySelector(".login-content-registrar").style.display = "none";
            document.querySelector(".login-content-entrar").style.display = "flex";
            flag = true;
        }else{
            document.querySelector(".login-content-registrar").style.display = "flex";
            document.querySelector(".login-content-entrar").style.display = "none";
            flag = false;
        }
    });
});

document.querySelector(".btn-log").addEventListener("click",() =>{
    inf = {
        name: document.querySelector(".name").value,
        correo: document.querySelector(".gmail").value,
        pass1: document.querySelector(".pass").value,
        pass2: document.querySelector(".pass-rep").value
    };

    if(inf.name != "" && inf.correo != "" && inf.pass1 != "" && inf.pass2 != ""){
        let exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(exp.test(inf.correo)){
            if(inf.pass1 === inf.pass2){
                create(inf)
                acceder(inf)
                .then(response => response.json())
                .then(data => {
                    if(data.state === true){
                        localStorage.setItem("session", JSON.stringify(data.user));
                        window.location.href = "/catalogo"
                    }
                });
            }else{
                alert("las contraseñas deben ser iguales");
            }
        }else{
            alert("ingrese un correo electronico valido")
        }
    }else{
        alert("todos los inputs deben ser rellenados")
    }
})

document.querySelector(".btn-in").addEventListener("click", () => {
    inf = {
        name: document.querySelector(".name-in").value,
        pass: document.querySelector(".pass-in").value
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
                    window.location.href = "/catalogo"
                }
            });
        }else{
            acceder(inf)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.state === true){
                    localStorage.setItem("session", JSON.stringify(data.user));
                    window.location.href = "/catalogo"
                }
            });
        }
    }else{
        alert("todos los inputs deben ser rellenados");
    }
})

async function create(data) {
    return fetch("/login/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify(data)
    });
}

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