// Importação de pacotes necessários
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express()
// Configuração do aplicativo e middlewares

app.use(cors());

app.use(express.json());



// Conexão com o banco de dados MongoDB
const conectarAoMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/filmes', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexão com MongoDB bem-sucedida.');
    } catch (erro) {
        console.error('Erro ao conectar no MongoDB:', erro);
    }
};
conectarAoMongoDB();

// Modelo de Filme
const Filme = mongoose.model('Filme', new mongoose.Schema({
    titulo: { type: String, required: true },
    sinopse: { type: String, required: true }
}));

app.get('/', async(req, res) => {
    res.json({ mensagem: 'API de filmes', versao: '1.0.0' });
})

// Endpoints da API
app.get('/filmes', async (req, res) => {
    const filmes = await Filme.find();
    res.json(filmes);
});

app.post('/filmes', async (req, res) => {
    const { titulo, sinopse } = req.body;
    try {
        const novoFilme = new Filme({ titulo, sinopse });
        await novoFilme.save();
        const filmesAtualizados = await Filme.find();
        res.json(filmesAtualizados);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao cadastrar filme.', erro });
    }
});

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});