const alunosMatriculados = [ "a", "b", "c", "d", "e" ];
const presencaSegunda = [ "b", "d", "e" ];
const presencaTerca = [ "a", "b", "c" ];
const presencaQuarta = [ "a", "b", "e" ];
const presencaQuinta = [ "a", "b", "c", "d" ];
const presencaSexta = [ "a", "b", "c", "d", "e" ];
const presencaSemana = [ presencaSegunda, presencaTerca, presencaQuarta, presencaQuinta, presencaSexta ];

function presencaSemanal(pSemana){
    for(let row = 0; row < pSemana.length; row++)
        for(let col = 0; col < pSemana[row].length; col++) {
            //console.log(`MAT[${row}][${col}] = ${pSemana[row][col]}`) //PERCORRENDO UM ARRAY BI-DIM E MOSTRANDO SEUS VALORES NO COSOLE
            //CALCULANDO A PORCENTAGEM DE PRESENÇA EM CADA DIA DE AULA
            console.log(`DIA ${row} = ${(pSemana[row].length / 5) * 100}`);
        }
}
presencaSemanal(presencaSemana);