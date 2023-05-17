import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, require: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }         // versiona os modelos  
            // se em modelos antigos pode ter ou não aquele campo...
    
)

    const autores = mongoose.model("autores", autorSchema)

    export default autores;