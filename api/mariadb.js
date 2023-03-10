import mariadb from "mariadb";

 const poll =  mariadb.createPool({
    host:"localhost",
    user:"root",
    port :"3306",
    database:"jarvis"
});

const con = await poll.getConnection();
 
const result = await con.query("select * from mahasiswa");

console.log(result[0].nama);