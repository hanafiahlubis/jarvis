import express from "express";

const app = express();


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

app.listen(3000,()=>console.log("Berhasil Berjalan"));