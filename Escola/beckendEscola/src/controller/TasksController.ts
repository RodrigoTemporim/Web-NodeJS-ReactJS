import { getRepository } from "typeorm";
import { Tasks } from "../entity/Tasks";
import { Request, Response } from "express";
import { request } from "http";


export const getAluno = async (request: Request, response: Response) => {

    const {id} = request.params;
    const task = await getRepository(Tasks).findOne(id);
    return response.json(task)     

}

export const saveAluno = async (request: Request, response: Response) => {
        const task = await getRepository(Tasks).save(request.body);
        return response.json(task);  


}

export const DeleteAluno = async (request: Request, response: Response) => {

    const { id } = request.params
    const task = await getRepository(Tasks).delete(id);

    if (task.affected == 1) {
        return response.status(200).json({ message: "Registro do aluno excluido com sucesso!" });
    }
    else {
        return response.status(400).json({ message: "Aluno não encontrado!" })
    }
};

export const updateAluno = async (request: Request, response: Response) => {

    const {id} = request.params;
    const task = await getRepository(Tasks).update(id, request.body);

    if (task.affected == 1){
        const alunoUpdate = await getRepository(Tasks).findOne(id)
        return response.json(alunoUpdate);
    } else {
        return response.status(404).json({message: "Aluno não cadastrado!"});
    }

}

export const ativarAluno = async (request: Request, response: Response) =>{

    const {id} = request.params;
    const task = await getRepository(Tasks).update(id, { active_student : true  })

    if (task.affected == 1){
        const alunoativado = await getRepository(Tasks).findOne(id)
        return response.json(alunoativado);
    } else {
        return response.status(404).json({message: "Aluno não cadastrado!"})
    }
    
}

export const todosAlunos = async (request: Request, response: Response) => {

    const tasks = await getRepository(Tasks).find()
    return response.json(tasks);

}