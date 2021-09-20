import { Router, request, response, Request, Response } from "express";

import { ativarAluno, getAluno, todosAlunos} from "./controller/TasksController";
import { saveAluno } from "./controller/TasksController";
import { DeleteAluno } from "./controller/TasksController";
import { updateAluno } from "./controller/TasksController";

const routes = Router();


routes.get("/aluno/:id", getAluno);
routes.post("/aluno", saveAluno);
routes.delete("/aluno/:id", DeleteAluno);
routes.put("/aluno/:id", updateAluno)
routes.patch("/aluno/:id", ativarAluno)
routes.all("/alunos", todosAlunos)


export default routes;