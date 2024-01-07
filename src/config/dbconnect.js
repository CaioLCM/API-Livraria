import mongoose from "mongoose"

    mongoose.connect("URL")
    return mongoose.connection
}

export default conectar