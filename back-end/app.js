// Importações
const express = require('express');
const mysql = require('mysql2');
var cors = require('cors')

// App
const app = express();

// Implementar CORS (assim a API poderá ser consumida externamente)
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'projeto' 
});

// Testar conexão
connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Rota para verificar usuário
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Verifica se o e-mail e a senha foram fornecidos
    if (!email || !password) {
        return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
    }

    // Consulta o banco de dados para encontrar o usuário
    connection.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, password], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao consultar o banco de dados.' });
        }

        // Verifica se o usuário foi encontrado
        if (results.length === 0) {
            return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
        }

        res.status(200).json({ mensagem: 'Autenticação bem-sucedida.' });
    });
});

// Servidor
app.listen(8080);
