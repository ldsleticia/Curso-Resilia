function divisaoLaranjas(qtd, numPessoas){
    return (numPessoas > 0) ? Math.trunc(qtd / numPessoas) : alert("Divisão Impossível");
}

function restoJoselito(qtd, numPessoas){
    return (numPessoas > 0) ? qtd % numPessoas : alert("Divisão Impossível"); //o : faz a função do else. Isso é um if em código ternário
}

let qtdLaranjas = parseInt(prompt("Quantas laranjas você tem?"));
let qtdPessoas = parseInt(prompt("Quantas pessoas têm para dividir?"));
let div = divisaoLaranjas(qtdLaranjas, qtdPessoas);
let rest = restoJoselito(qtdLaranjas, qtdPessoas);

document.write(`Cada pessoa ficará com ${div} laranjas e o Joselito com ${rest} laranja(s)`);
