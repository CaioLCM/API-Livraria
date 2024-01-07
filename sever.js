import app from "./src/routes/rotaLivros.js"
import conectar from "./src/config/dbconnect.js"

const conectado = conectar()

app.listen(3000, () => console.log("Server on!!!"))
