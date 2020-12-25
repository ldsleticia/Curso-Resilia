/* Exibindo o menu: faça uma função que exibe o menu de bebidas de um restaurante (em umconsole.log só: utilize quebras de linha na mensagem), com um item em cada linha: 1-Refrigerante, 2-Suco, 3-Água */

function exibeMenu(){
    console.log("1 - Refrigerante\n2 - Suco\n3 - Água");
}

exibeMenu();

/* Após isso, receba a escolha do cliente como um número(utilizando console.log) e mostre no console o número escolhido pelo cliente */

function recebePedido(item){
    console.log(item);
}

const pedido = 1

recebePedido(pedido);

function exibePedido(item){
    if( item === 1){
        console.log("Refrigerante");
    } else if( item === 2){
        console.log("Suco")
    }else if( item === 3){
        console.log("Água")
    }else{
        console.log("Pedido inválido");
    }
}

exibePedido(pedido);