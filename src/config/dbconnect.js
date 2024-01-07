import mongoose from "mongoose"

async function conectar(){
    mongoose.connect("mongodb+srv://caiolene:admin123@cluster0.tv8laoy.mongodb.net/Livrario?retryWrites=true&w=majority")
    return mongoose.connection
}

export default conectar