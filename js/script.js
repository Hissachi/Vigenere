const alphabet = "abcdefghijklmnopqrstuvwxyz";

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

function criptografar() {
    let mensagem = document.getElementById("mensagem").value;
    let chave = document.getElementById("chave").value;
    
    if (mensagem === "" || chave === "") {
        document.getElementById("resultado").innerText = "Preencha a mensagem e a chave!";
        return;
    }

    let resultado = vigenereEncrypt(mensagem, chave);
    document.getElementById("resultado").innerText = "🔒 Criptografado: " + resultado;
}

function descriptografar() {
    let mensagem = document.getElementById("mensagem").value;
    let chave = document.getElementById("chave").value;

    if (mensagem === "" || chave === "") {
        document.getElementById("resultado").innerText = "Preencha a mensagem e a chave!";
        return;
    }

    let resultado = vigenereDecrypt(mensagem, chave);
    document.getElementById("resultado").innerText = "🔓 Descriptografado: " + resultado;
}