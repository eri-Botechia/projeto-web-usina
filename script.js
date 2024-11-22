// Configurações de conexão com o backend
const protocolo = 'http://';
const baseURL = 'localhost:3000';
const filmesEndpoint = '/filmes';

// Função para obter filmes do backend e exibir na tabela
const filmesEndpoint = '/filmes';

async function obterFilmes() {
    try {
        const response = await axios.get(filmesEndpoint);
        renderizarFilmes(response.data);
    } catch (error) {
        console.error('Erro ao obter filmes:', error);
    }
}

function renderizarFilmes(filmes) {
    const tabela = document.getElementById('filmesTabela');
    tabela.innerHTML = '';
    filmes.forEach(filme => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${filme.titulo}</td>
            <td>${filme.sinopse}</td>
        `;
        tabela.appendChild(row);
    });
}

async function cadastrarFilme() {
    const titulo = document.getElementById('tituloInput').value;
    const sinopse = document.getElementById('sinopseInput').value;

    try {
        await axios.post(filmesEndpoint, { titulo, sinopse });
        obterFilmes();
    } catch (error) {
        console.error('Erro ao cadastrar filme:', error);
    }
}

document.addEventListener('DOMContentLoaded', obterFilmes);