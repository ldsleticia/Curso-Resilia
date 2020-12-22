function cores(cor){
    switch(cor){
        case "vermelho":
            console.log("pare já!");
        break
        case "amarelo":
            console.log("melhor freiar");
        break
        case "verde":
            console.log("pode passar!");
        break
        default: 
        console.log("cor não aceita");
    }
}

let corDoSemaforo = prompt("Qual cor está o semáforo?");

cores(corDoSemaforo);