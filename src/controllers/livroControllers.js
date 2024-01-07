import livro from "../models/livro.js";

class LivroControle {

    static listarLivros = async (res) => {
        const livros_encontrados = await livro.find({})
        res.status(200).json(livros_encontrados)
    }

    static menuPrincipal = (res) => {
        res.status(200).send("Menu principal")
    }

    static buscarLivro = async (req, res) => {
        const livro_encontrado = await livro.findById(req.params.id) 
        res.status(200).json(livro_encontrado)
    }

    static adicionarLivro = (req, res) => {
        livro.create(req.body)
        res.status(201).send(`Livro "${req.body.Titulo}" adicionado com sucesso!`)
    }

    static removerLivro = async (req, res) => {
        await livro.findByIdAndDelete(req.params.id)
        res.status(200).send(`Livro removido com sucesso`)
    }

    static atualizarLivro = async (req, res) => {
        await livro.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send("Livro atualizado com sucesso!")
    }

}

export default LivroControle