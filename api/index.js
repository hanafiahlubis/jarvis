import express from "express";
import { client } from "./pg.js";

const app = express();


// middweleerr yaitu ketika kita mengakses maka akan masuk ke middlewer terlebuh dahulu
app.use((req, res, next) => {
    if (req.url === "/") {
        res.send("Ali Hanafiah");
    }
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
    console.log(result.rows[1].nama);
})

app.listen(3000, () => console.log("Berhasil Berjalan"));