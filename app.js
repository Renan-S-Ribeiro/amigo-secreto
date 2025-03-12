const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    const nomeJaExiste = amigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase());
    if (nomeJaExiste) {
        alert('Este nome já foi adicionado!');
        input.value = '';
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
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

function resetarLista() {
    const confirmar = confirm('Tem certeza que deseja resetar a lista e o sorteio?');

    if (!confirmar) return;

    amigos.length = 0;
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
