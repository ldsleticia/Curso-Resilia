function dobro(n){
	return n*2;
}

function metade(n){
	return n/2;
}

function saudacao(nome){
	document.write(`olá ${nome}. Tudo bem?`);
}

let num = 10;

let n2x = dobro(num);
document.write(`O dobro de ${num} é ${n2x}<br/>`)

let ns2 = metade(num); 
document.write(`A metade de ${num} é ${ns2} <br/>`)

saudacao("Letícia")
