    import express from "express";
    import livros from "./livrosRoutes.js";
    import autores from "./autoresRoutes.js";

    const routes = (app) => {
        app.route('/').get((req, res) =>{
            res.status(200).send({titulo: "Curso de node"})
        })

        app.use(
            express.json(),
            livros, 
            autores
        )
    }

    export default routes;

    // tudo que tem que seguir, caminho dado o endPoint que foi passado no postman ele se entende e 
    //onde ele tem que procurar pra chegar no metodo para executar, no caso devolver a lista de livros