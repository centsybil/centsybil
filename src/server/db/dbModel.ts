const { Pool } = require('pg');

const myURI = 'postgres://awefbgwx:8Qv2Ls1YG_3tsveqr48Ru_HY-M-bYcRR@lallah.db.elephantsql.com:5432/awefbgwx';


 const pool = new Pool({connectionString: myURI})


module.exports = {
  query: (text: string, parameter: number[] | string[], callback: any) => {
    console.log('Querying Assessment database');
    return pool.query(text,parameter,callback)
  }
}; 