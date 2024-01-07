import mongoose from "mongoose"

const modelo = new mongoose.Schema({

    "Titulo": String

})

const livro = mongoose.model("Livros", modelo)

export default livro