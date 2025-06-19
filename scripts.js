
let livros = [];

function abrirSecao(secao) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(secao).classList.remove('hidden');
    if (secao === 'lista') {
        renderizarLista();
    }
}

function adicionarLivro() {
    const nome = document.getElementById("nomeLivro").value;
    const autor = document.getElementById("autorLivro").value;

    if (nome && autor) {
        livros.push({ nome, autor });
        alert("Livro cadastrado com sucesso!");
        document.getElementById("nomeLivro").value = "";
        document.getElementById("autorLivro").value = "";
        abrirSecao('lista');
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

function renderizarLista() {
    const lista = document.getElementById("livrosList");
    lista.innerHTML = "";
    if (livros.length === 0) {
        lista.innerHTML = "<li>Nenhum livro cadastrado.</li>";
    } else {
        livros.forEach((livro, index) => {
            const item = document.createElement("li");
            item.textContent = `${index + 1}. ${livro.nome} - ${livro.autor}`;
            lista.appendChild(item);
        });
    }
}
