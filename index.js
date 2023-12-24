import mongoose from "mongoose";
import express from "express"

async function conectar(){
    mongoose.connect("")

    return mongoose.connection
}

const conectado = await conectar()
conectado.once("open", () => console.log("Conexão feita!"))

//////////////////////////////////////////////////////////////////

const schema = new mongoose.Schema({
    "name": String
})

const livro = mongoose.model("Livros", schema)

///////////////////////////////////////////////////////////////////
const server = express()
server.use(express.json())
async function buscarLivro(res){
    const livroEncontrado = await livro.find({})
    return res.status(200).json(livroEncontrado)
}

async function adicionarLivro(nome, res){
    const new_livro = await livro.create({"name": nome})
    return res.status(201).send(`Livro criado com sucesso!`)
}

async function removerLivro(req, res){
    console.log(req)
    const livro_excluido = livro.findById(req)
    await livro.findByIdAndDelete(req)
    res.status(200).send(`Livro excluido com sucesso`)
}

async function updateLivro(req, res){
    const idDoLivro = req.params.id
    const novoNomeLivro = req.body.name
    await livro.findByIdAndUpdate(idDoLivro, {"name": novoNomeLivro})
    res.status(200).send(`Livro atualizado com sucesso!`)
}

server.get("/livros", (req, res) => buscarLivro(res))
server.post("/livros", (req, res) => adicionarLivro(req.body.name, res))
server.delete("/livros/:id", (req, res) => removerLivro(req.params.id, res))
server.put("/livros/:id", (req, res) => updateLivro(req, res))

server.listen(3000, () => console.log("Servidor está funcionando!"))
