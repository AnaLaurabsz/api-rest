import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
	id: { type: String }, // é autogerado, diferente do título, autor..
	titulo: { type: String, required: true },
	autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true },
	editora: { type: String, required: true },
	numeroPaginas: { type: Number }
}
);

const livros = mongoose.model('livros', livroSchema);

export default livros;

    // o model tem uma coleção de livros, e os livros seguem esse esquema, tipo de padrão e atributos