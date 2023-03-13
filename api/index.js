import express from "express";
import { client } from "./pg.js";

const app = express();


// middweleerr yaitu ketika kita mengakses maka akan masuk ke middlewer terlebuh dahulu
app.use((req, _res, next) => {

    console.log(req.url);
    next();
})

app.use(express.static("public"));
app.use(express.json());

app.get("/api/hanafiah", (_req, res) => {
    res.send("Ali ")
});
app.get("/api/salam", (_req, res) => {
    res.send("assamualikum ");
});

app.get("/api/mahasiswa", async (_req, res) => {
    const result = await client.query("select * from mahasiswa");
    res.send(result.rows);
})


app.listen(3000, () => console.log("Berhasil Berjalan"));