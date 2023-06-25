import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const config = {
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    tsl: true,
    max: 50,
    idleTimeoutMillis: 3000,
    connectionTimeoutMillis: 3000,
    maxUses: 7500,
}

const pool = new pg.Pool(config);
let connectionCount = 0;
let acquireCount = 0;

pool.on("error", (e, client) => {
    console.log(`Db client encountered errors!\nError message: ${e.message} with stack:\n ${e.stack}`);
    client.release();
});
pool.on("connect", client => {
    connectionCount++;
});
pool.on("acquire", client => {
    acquireCount++;
});
pool.on("release", (e, client) => {
});
pool.on("remove", client => {
});

pool.connect().then(client => {
    client.query("SELECT NOW()").then(rows =>
        console.log(`Pinged successfully! ${rows.rows[0]['now']}`)
    ).catch(e => {
        client.release();
        console.log(`Ping error!\nError message: ${e.message} with stack:\n ${e.stack}`);
    });
}).catch(e => {
    pool.end();
    console.log(`Db connection error!\nError message: ${e.message} with stack:\n ${e.stack}`);
});


export default {
    query: async (text, values = []) => {
        const start = Date.now();
        const res = await pool.query(text, values);
        const duration = Date.now() - start;
        console.log(`executed query ${text.text} Duration:${duration} Returned rows:${res.rowCount}` );
        return res;
    },
    end: () => {
        console.log(`Pool closed! connectionCount:${connectionCount}, acquireCount:${acquireCount}`)
        pool.end;
    },
};
