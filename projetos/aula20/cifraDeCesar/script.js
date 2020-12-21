let alphabetMaiusculo = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

let alphabetMinusculo = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

let myFrase = '';
let myGrip = '';

let opcao = parseInt(
	prompt('1- deseja Criptografar \n2- deseja descriptografar')
);
if (opcao === 1) {
	let frase = prompt('Digite a palavra para Criptografar !!');
	cipher(alphabetMinusculo, alphabetMinusculo, frase);
} else if (opcao === 2) {
	let decrypt = prompt('Digite a palavra para descriptografar !!');
	decipher(alphabetMinusculo, alphabetMinusculo, decrypt);
} else {
	alert('Opção inválida :(');
}

function cipher(array1, array2, frase) {
	for (let i = 0; i < frase.length; i++) {
		let x = frase.charCodeAt([i]);
		let maisuculo = String.fromCharCode(x);

		if (maisuculo.toLocaleUpperCase() === maisuculo) {
			x = (x - 65 + 7) % 26;
			myGrip += alphabetMaiusculo[x];
		} else {
			x = (x - 97 + 7) % 26;
			myGrip += alphabetMinusculo[x];
		}
	}
	alert('Sua mensagem criptografada é: ' + myGrip);
}

function decipher(arr1, arr2, decrypt) {
	for (let i = 0; i < decrypt.length; i++) {
		let x = decrypt.charCodeAt([i]);
		let maisuculo = String.fromCharCode(x);

		if (maisuculo.toLocaleUpperCase() === maisuculo) {
			x = (x + 65 - 7) % 26;
			myFrase += alphabetMaiusculo[x];
		} else {
			x = (x - 97 - 7) % 26;
			if (x < 0) {
				x = x + 26;
			}
			myFrase += alphabetMinusculo[x];
		}
	}
	alert('Sua mensagem descriptografada é: ' + myFrase);
}
