/* 
	function oiSouUmaFuncao(frase) {
		let s = `${frase}`;
		document.write(s);
	}
	let guardaRet = oiSouUmaFuncao("OI EU SOU UMA FRASE");
	document.write(oiSouUmaFuncao("asdasda"))
	oiSouUmaFuncao("sdkljflasjdlkf"); //chamada da funcao ou function call
*/
// valor x referencia - entendendo funcoes -> https://braziljs.org/artigos/diferencas-entre-valor-e-referencia-em-javascript/

//TO DO: quebrar linha dentro do document - tip: quebra de linha em html
//TO DO: imprimir frase com o document dentro da funcao trocaAnimal
//TO DO: chamar a funcao trocaAnimal passando como argumento o novo animal
function trocaAnimal(nome) {
	document.write(`Pensando melhor eu gostaria de ser um ${nome}`);
	//INSERT CODE
}

let animal = "ovelha";
document.write(`No primeiro momento, eu gostaria de ser uma: ${animal}<br/>`);
//INSERT CODE

let outroAnimal = "gavião";

//INSERT CODE

trocaAnimal(outroAnimal);