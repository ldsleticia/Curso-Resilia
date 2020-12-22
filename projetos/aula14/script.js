function concatena(palavra1, palavra2){
    return palavra1 + palavra2;
}

document.write(`${concatena("Olá ","mundo")}`);

function saudacao(nome){
    var nome = prompt("Digite seu nome");
    return nome;
}

function pulaLinha(){
    document.write("<br>");
    document.write("<br>");
}

pulaLinha();
document.write(`Olá ${saudacao()}. Tudo bem ${saudacao()}?`)

function resto(num){
    let numero = num % 9;
    return numero;
}
pulaLinha();
document.write(`O resto de 18 divididos por 9 é: ${resto(18)}`)