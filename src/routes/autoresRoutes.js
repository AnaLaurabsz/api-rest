import  express from "express";
import AutorController from "../controllers/autoresController.js";

    const router = express.Router();    // roteamento do express 

    router
        .get("/autores", AutorController.listarAutores)
        .get("/autores/:id", AutorController.listarAutorPorId)
        .post("/autores", AutorController.cadastrarAutor)
        .put("/autores/:id", AutorController.atualizarAutor)
        .delete("/autores/:id", AutorController.excluirAutor)

        export default router;

        // na parte de controlador, define a implementação do metodo e o arquivo de rotas, define o que 
        //vai acontecer a cada rota, /autores, /id.. vai acontecer oq. /autores, /listagem qual metodo vai ser chamado
        // concentra tudo que vai acontecer baseado na req, e no param da rota 