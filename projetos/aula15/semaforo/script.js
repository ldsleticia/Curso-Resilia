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

let corDoSemaforo = prompt("Qual cor está o semáforo?");//use isso como parâmetro da função se não você não vai conseguir que a função pegue o que está dentro das condições do swith case e retornará sempre uma coisa diferente do esperado. Sempre se lembre que se você passou um parâmetro na criação da função, precisa passar um parâmetro na chamada da função.

cores(corDoSemaforo);