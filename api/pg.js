import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
    host: "db.gfyxmythpcokpikhlvpv.supabase.co",
    user: "postgres",
    port: 5432,
    password: "aliganteng123",
});
await client.connect();
//  await client.query("select * from mahasiswa");

