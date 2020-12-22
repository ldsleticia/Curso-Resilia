function podeDirigir(idadeUsuario, idadePermitidoDirigir){
    if(idadeUsuario >=idadePermitidoDirigir){
        console.log("Você pode dirigir");
    }else{
        console.log("Você não pode dirigir")
    }
}

let idade = parseInt(prompt("Digite sua idade")); /* let não tem escopo global */
let permitido = parseInt(prompt("Com quantos anos pode dirigir no seu país?"));

podeDirigir(idade, permitido);