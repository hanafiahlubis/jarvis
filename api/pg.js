import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456789",
    database: "integer",
});
await client.connect();
const result = await client.query("select * from mahasiswa");

console.log(result.rows[1].nama);