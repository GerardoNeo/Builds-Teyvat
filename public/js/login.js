document.querySelector(".btn-login").addEventListener("click", ()=>{
    let inf = {
        correo: document.getElementById("gmail").value,
        pass1: document.getElementById("pass").value,
        pass2: document.getElementById("pass-rep").value
    }

    if(inf.correo != "" && inf.pass1 != "" && inf.pass2 != ""){
        console.log(inf);
        //^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
        window.location.href = "/catalogo"
    }else{
        console.log("chinga tu madre")
    }
});