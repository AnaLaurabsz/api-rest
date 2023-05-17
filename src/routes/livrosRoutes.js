import  express from "express";
import LivroController from "../controllers/livrosController.js";

    const router = express.Router();    // roteamento do express 

    router
        .get("/livros", LivroController.listarLivros)
        .get("/livros/busca", LivroController.listarLivroPorEditora)
        .get("/livros/:id", LivroController.listarLivroPorId)
        .post("/livros", LivroController.cadastrarLivros)
        .put("/livros/:id", LivroController.atualizarLivros)
        .delete("/livros/:id", LivroController.excluirLivro)

        // se eu colocar o /livros/busca -> busca por parâmetro embaixo do /livros/:id ele iria achar 
        // que a query toda no postman (endpoint) é um id, e vai dizer, no erro, que o id passado não existe

        // a ordem seria melhor, da mais específica para a menos específica, a de busca é mais específica
        export default router;

        // na parte de controlador, define a implementação do metodo e o arquivo de rotas, define o que 
        //vai acontecer a cada rota, /livros, /id.. vai acontecer oq. /livros, /listagem qual metodo vai ser chamado
        // concentra tudo que vai acontecer baseado na req, e no param da rota 