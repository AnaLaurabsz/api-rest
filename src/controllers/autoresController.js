import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)     // metodo vai ser listar autores, passar uma req res e ele vai localizar todos 
            //os autores que tiver e devolver o status 200, devolvendo o autor em json
        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do autor não localizado.` })
            }
            else {
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar o autor.` })
            }
            else {
                res.status(201).send(autor.toJSON())
            }

        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Autor atualizado com sucesso' })
            }
            else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Autor removido com sucesso' })
            }
            else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default AutorController



// arquivo de rotas para cada get, post.. qual rota deve chamar, qual metodo deve chamar