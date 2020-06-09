const express = require('express');
const Pool = require('pg').Pool;
const Cors = require('cors')

const server = express();
server.use(express.json());
server.use(Cors())

const pool = new Pool({
    user: 'eaxkkungpqdbgk',
    password: 'f20b0e2816754c6c925a659775181212d788dfb741526017bfc2f6cb3a7dc4fd',
    host: 'ec2-34-193-117-204.compute-1.amazonaws.com',
    database: 'd4vki98p562aag',
    port: 5432,
    ssl: { rejectUnauthorized: false}
});

//Formato de dataLancamento(MM/DD/YYYY)

server.get('/jogos', async function(request, response) {
    const result = await pool.query('SELECT * FROM jogos');
    return response.json(result.rows);
})

server.post('/jogos', async function(request, response) {
    const novosDados = request.body;
    
    const sql = `INSERT INTO jogos(nome, categoria, desenvolvedora, data_lancamento) VALUES ($1, $2, $3, $4)`

    await pool.query(sql, [novosDados.nome, novosDados.categoria, novosDados.desenvolvedora, novosDados.dataLancamento]);

    return response.status(204).send()
})

server.put('/jogos/:id', async function(request, response) {
    const id = request.params.id;
    const dadosAtualizados = request.body

    const sql = `UPDATE jogos 
    SET nome = $1, categoria = $2, desenvolvedora = $3, data_lancamento = $4
    WHERE id = $5
    `
    pool.query(sql, [dadosAtualizados.nome, dadosAtualizados.categoria, dadosAtualizados.desenvolvedora, dadosAtualizados.dataLancamento, id])
    
    return response.status(204).send()
})

server.delete('/jogos/:id', async function(request, response) {
    const id = request.params.id;

    const sql = `DELETE FROM jogos WHERE id = ${id}`

    await pool.query(sql);

    return response.status(204).send()
})

server.listen(process.env.PORT || 3000);