# Projeto de Autenticação

Este projeto é uma aplicação de autenticação simples, composta por um backend em Node.js com uma API para login e um frontend em HTML, CSS e JavaScript para interação com a API.

## 1. Banco de Dados

Para configurar o banco de dados MySQL, siga os passos abaixo:

### Criação do Banco de Dados e Tabela

1. **Crie uma base de dados chamada `projeto`:**

    ```sql
    CREATE DATABASE projeto;
    ```

2. **Crie a tabela `usuarios` dentro da base de dados `projeto`:**

    ```sql
    CREATE TABLE usuarios (
        codigo INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(30),
        senha VARCHAR(10)
    );
    ```

3. **Insira um usuário na tabela `usuarios`:**

    ```sql
    INSERT INTO usuarios (email, senha) VALUES ('contato@ralflima.com', '123');
    ```

## 2. Back-end

Para configurar e executar o backend, siga as instruções abaixo:

### Configuração

1. **Abra o Visual Studio Code e selecione a pasta `back-end`** onde o projeto está localizado.

2. **Instale todas as dependências do Node.js:**

    No terminal do Visual Studio Code, execute o seguinte comando:

    ```bash
    npm install
    ```

### Execução

1. **Execute o projeto:**

    Para iniciar o servidor, use um dos seguintes comandos:

    ```bash
    node app.js
    ```

    ou, se você estiver usando o `nodemon` para recarregar automaticamente:

    ```bash
    nodemon app.js
    ```

## 3. Front-end

Para visualizar a interface do usuário:

1. **Abra o arquivo `index.html` diretamente no seu navegador.**

    Você pode arrastar e soltar o arquivo `index.html` em uma janela do navegador ou usar um servidor local para servir o arquivo.