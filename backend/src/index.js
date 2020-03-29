const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
// colocar somente barra  significa a rota raiz
/**
 * Métodos HTTP:
 * GET: Buscar uma informação do Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no Back-end
 */
/**
 * Tipos de Parâmetros:
 * Query Params: Parâmetros nomeados na rota após "?"(Filtros e páginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Resquest Body: Corpo da requisição, ultilizado para criar ou alterar recursos
 */

 /*
 *SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */ 
/**
 * Driver: SELECT*FROM users
 * Query Builder: table('users').select('*')
 */

