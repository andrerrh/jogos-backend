const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'eaxkkungpqdbgk',
    password: 'f20b0e2816754c6c925a659775181212d788dfb741526017bfc2f6cb3a7dc4fd',
    host: 'ec2-34-193-117-204.compute-1.amazonaws.com',
    database: 'd4vki98p562aag',
    port: 5432,
    ssl: { rejectUnauthorized: false}
});
//  const sql = `
//      CREATE TABLE IF NOT EXISTS jogos
//      (
//          ID serial primary key,
//          nome varchar(250),
//          categoria varchar(40),
//          desenvolvedora varchar(50),
//          data_lancamento date
//      )`

// pool.query(sql);


  const sql_insert_test = `
      INSERT INTO jogos(nome, categoria, desenvolvedora, data_lancamento)
      VALUES (
          'Assetto Corsa',
          'Corrida',
          'Kunos Software',
          '11/25/2013'
      )
  `

//   pool.query(sql_insert_test);

// const sql_select_test = `
//     SELECT * FROM jogos    
// `

//     pool.query(sql_select_test, function(error, result) {
//         if(error) throw error;

//         console.log(result.rows);
//     })