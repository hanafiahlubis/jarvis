import express from "express";
import mariadb from "mariadb";

const con =  mariadb.createPool({
    host : "localhost",
    user : "root",
    password:"",
    database : ""
});

const app = express();
const conn = con.getConnection();



// middweleerr yaitu ketika kita mengakses maka akan masuk ke middlewer terlebuh dahulu
app.use((req,res,next)=>{
    if(req.url === "/"){
        res.send("Ali Hanafiah");
    }
    console.log(req.url);
    next();
})

app.use(express.static("public"));
app.use(express.json());

app.get("/api/hanafiah",(_req,res)=>{
    res.send("Ali ")
});
app.get("/api/salam",(_req,res)=>{
    res.send("assamualikum ");
});

app.listen(3000,()=>console.log("Berhasil Berjalan"));