const readline = require("readline");

// Interface para entrada do usuário via terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Função para criptografar usando a Cifra de Vigenère
function vigenereEncrypt(mensagem, chave) {
    let mensagemFinal = "";
    mensagem = mensagem.toLowerCase();
    chave = chave.toLowerCase();

    for (let i = 0, j = 0; i < mensagem.length; i++) {
        let index = alphabet.indexOf(mensagem[i]);

        if (index !== -1) {
            let shift = alphabet.indexOf(chave[j % chave.length]); 
            let novoIndex = (index + shift) % alphabet.length;
            mensagemFinal += alphabet[novoIndex];
            j++; 
        } else {
            mensagemFinal += mensagem[i]; 
        }
    }
    return mensagemFinal;
}

// Função para descriptografar usando a Cifra de Vigenère
function vigenereDecrypt(mensagem, chave) {
    let mensagemFinal = "";
    mensagem = mensagem.toLowerCase();
    chave = chave.toLowerCase();

    for (let i = 0, j = 0; i < mensagem.length; i++) {
        let index = alphabet.indexOf(mensagem[i]);

        if (index !== -1) {
            let shift = alphabet.indexOf(chave[j % chave.length]); 
            let novoIndex = (index - shift + alphabet.length) % alphabet.length;
            mensagemFinal += alphabet[novoIndex];
            j++; 
        } else {
            mensagemFinal += mensagem[i]; 
        }
    }
    return mensagemFinal;
}

// Função principal para interagir com o usuário
function main() {
    rl.question("\nEscolha uma opção:\n1 - Criptografar\n2 - Descriptografar\n0 - Sair\n> ", function(opcao) {
        if (opcao === "0") {
            console.log("Encerrando o programa...");
            rl.close();
            return;
        }

        if (opcao !== "1" && opcao !== "2") {
            console.log("Opção inválida. Tente novamente.");
            return main();
        }

        rl.question("Digite a mensagem: ", function(mensagem) {
            rl.question("Digite a chave: ", function(chave) {
                if (opcao === "1") {
                    console.log("Mensagem criptografada:", vigenereEncrypt(mensagem, chave));
                } else {
                    console.log("Mensagem descriptografada:", vigenereDecrypt(mensagem, chave));
                }
                main(); // Volta ao menu principal
            });
        });
    });
}

// Inicia o programa
main();
