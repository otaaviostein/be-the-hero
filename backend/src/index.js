const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json()); // Antes das rotas, falando para o Express converter o JSON em objeto js

app.use(routes);

app.listen(3333); // a aplicação vai acessar a porta 3333 localhost:3333

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos (/users/1 por exemplo, listará o usuário com o id 1) (users/:id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
 * SQL: MySQL, SQLite, Microsoft SQL Server ...
 * NoSQL: MongoDB, CouchDB ...
 */


 /**
  * Driver do Banco de Dados: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


    // const query = request.query;
    // console.log(query); //query params

    // const params = request.params; // Acessar os parâmetros que são enviados 
    // console.log(params); //route params




/**
 * Start Backend = npm start
 */


/**
 * 
 * Quando instalar o Nodemon por exemplo, instalar com o -D no final, para dizer que é um dependencia apenas de desenvolvimento. Não será exportada com a aplicação
 * 
 * 
 * 
 */


 /**
  * npx executa um pacote
  * npm instala um pacote
  */