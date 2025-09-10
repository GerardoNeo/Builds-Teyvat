let aux;
let inf;
let flag = false;

document.querySelector(".iniciar").addEventListener("click", ()=>{
    let rows = document.querySelectorAll(".input-row");
    aux = rows;

    rows[1].remove();
    rows[3].remove();
    rows[0].querySelector("p").textContent = "Usuario o gmail.";
    rows[0].querySelector("input").style.height = "2.5em";
    rows[2].querySelector("input").style.height = "2.5em";
    document.querySelector(".formu-content").style.height = "30%";
    document.querySelector(".login-content").style.height = "70%";

    flag = true;
})

document.querySelector(".btn-login").addEventListener("click", ()=>{
    if(flag === false){
        inf = {
            name: document.getElementById("name").value,
            correo: document.getElementById("gmail").value,
            pass1: document.getElementById("pass").value,
            pass2: document.getElementById("pass-rep").value
        }

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
                            setTimeout(window.location.href = "/catalogo", 3000)
                        }
                    });
                }else{
                    alert("las contraseñas deben ser iguales")
                }
            }else{
                alert("ingrese un correo electronico valido")
            }
        }else{
            alert("todos los inputs deben ser rellenados")
        }
    }else{
        inf = {
            name: document.getElementById("name").value,
            pass1: document.getElementById("pass").value
        }

        if(inf.name != "" && inf.pass1 != ""){
            let exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(exp.test(inf.correo)){
                acceder(inf)
                .then(response => response.json())
                .then(data => {
                    if(data.state === true){
                        localStorage.setItem("session", JSON.stringify(data.user));
                        window.location.href = "/catalogo"
                    }
                });
            }else{
                acceder(inf)
                .then(response => response.json())
                .then(data => {
                    if(data.state === true){
                        localStorage.setItem("session", JSON.stringify(data.user));
                        window.location.href = "/catalogo"
                    }
                });
            }
        }else{
            alert("todos los inputs deben ser rellenados")
        }
    }
});

async function create(data) {
    try {
        const response = await fetch("/login/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Éxito:", result);
            alert(result.success || "Login correcto");
        } else {
            console.error("Error del servidor:", result);
            alert(result.error || "Ocurrió un error");
        }

    } catch (error) {
        console.error("Error en fetch:", error);
        alert("No se pudo conectar con el servidor");
    }
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