function podeBeber(idadeUsuario, idadePermitidoBeber){
    if(idadeUsuario >=idadePermitidoBeber){
        console.log("Você pode beber");
    }else{
        console.log("Você não pode beber");
    }
}

let idadeUser = parseInt(prompt("Digite sua idade"));
let permitidoBeber = parseInt(prompt("Com quantos anos pode beber no seu país?"))

podeBeber(idadeUser, permitidoBeber);