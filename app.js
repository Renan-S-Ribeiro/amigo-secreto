//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes
const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    amigos.push(nome);
    input.value = ''; // Limpa o campo de input
    atualizarLista(); // Atualiza a exibição da lista
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length === 0) {
        alert('Adicione ao menos um nome antes de sortear!');
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${sorteado}`;
    resultado.appendChild(li);
}
