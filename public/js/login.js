document.querySelector(".btn-login").addEventListener("click", ()=>{
    let inf = {
        correo: document.getElementById("gmail").value,
        pass1: document.getElementById("pass").value,
        pass2: document.getElementById("pass-rep").value
    }

    if(inf.correo != "" && inf.pass1 != "" && inf.pass2 != ""){
        console.log(inf);
    }else{
        console.log("chinga tu madre")
    }
});