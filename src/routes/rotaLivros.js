import express from "express";
import LivroControle from "../controllers/livroControllers.js";

const app = express()

app.use(express.json())

app.get("/", (req, res) => LivroControle.menuPrincipal(res))
app.get("/livros", (req, res) => LivroControle.listarLivros(res))
app.get("/livros/:id", (req, res) => LivroControle.buscarLivro(req, res))

app.post("/livros", (req, res) => LivroControle.adicionarLivro(req, res))

app.delete("/livros/:id", (req, res) => LivroControle.removerLivro(req, res))

app.put("/livros/:id", (req, res) => LivroControle.atualizarLivro(req, res))

export default app