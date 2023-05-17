import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = (req, res) => {
    livros.find()                // listra os livros, procura com o find, popula com os dados de autor e executa p ver se os dados estão certos...
      .populate('autor')
      .exec((err, livros) => {
        res.status(200).json(livros)     // metodo vai ser listar livros, passar uma req res e ele vai localizar todos 
        //os livros que tiver e devolver o status 200, devolvendo o livro em json
      })
  }

  static listarLivroPorId = (req, res) => {
    const id = req.params.id;

    livros.findById(id)
    .populate('autor', 'nome')
    .exec((err, livros) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id do livro não localizado.` })
      }
      else {
        res.status(200).send(livros);
      }
    })
  }

  static cadastrarLivros = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar o livro.` })
      }
      else {
        res.status(201).send(livro.toJSON())
      }

    })
  }

  static atualizarLivros = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Livro atualizado com sucesso' })
      }
      else {
        res.status(500).send({ message: err.message })
      }
    })
  }


  static excluirLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Livro removido com sucesso' })
      }
      else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static listarLivroPorEditora = (req,res) =>{
    const editora = req.query.editora
                                                  // quando faezr listar livros por editora, vou receber na query um param chamado editora que vou
                                                  //  atribuir a uma variável e fazer um livros. find passando o conteúdo da variável "editora" como critério de busca 
    livros.find({'editora': editora}, {}, (err, livros) =>{
      res.status(200).send(livros);
    })
  }

}

export default LivroController



// arquivo de rotas para cada get, post.. qual rota deve chamar, qual metodo deve chamar