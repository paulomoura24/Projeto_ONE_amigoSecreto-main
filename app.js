let listaDeAmigos = [];
let inputAmigo = document.getElementById('amigo');
let buttonAdd = document.querySelector('.button-add');

function limparCampo() {
    inputAmigo.value = '';
}

function addAmigos() {
    let amigos = inputAmigo.value.trim();

    if (amigos === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    if (verificaCaracteresEspeciais(amigos)) {
        alert("Por favor, digite um nome sem caracteres especiais!");
        return;
    }

    if (listaDeAmigos.includes(amigos)) {
        alert("Esse nome já está na lista!");
        return;
    }

    listaDeAmigos.push(amigos);
    atualizarlista();
    limparCampo();
}

function sortearAmigos() {
    if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia');
        return;
    } else if (listaDeAmigos.length <= 1) {
        alert('A lista deve conter mais de um nome!');
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[numeroAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;

    listaDeAmigos = []; 
    atualizarlista(); 
    lançarConfetti();
    
}

function acionarBotao() {
    buttonAdd.disabled = inputAmigo.value.trim() === '';
}

inputAmigo.addEventListener('input', acionarBotao);

function verificaCaracteresEspeciais(str) {
    const regex = /[^a-zA-ZÀ-ÿ' ]/; 
    return regex.test(str);
}

function lançarConfetti() {
    confetti({
        particleCount: 1000,
        spread: 300,
        origin: { x: 0.5, y: 0.5 }
    });
}

function atualizarlista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaDeAmigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
