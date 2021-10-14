import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import api from "../../services/api";
import moment from 'moment';

interface IAluno{
    active_student: boolean;
    adress: string;
    born_date: Date;
    creat_at: Date;
    id: number;
    name: string;
    ra: string;
    updated_at: Date;    
}


const Alunos: React.FC = () =>{

    const [alunos, setAlunos] = useState<IAluno[]>([]);

    async function loadAlunos() {
        const response = await api.get('/alunos');
        console.log(response);   
        setAlunos(response.data as IAluno[])
        
        

    }

    useEffect(() => {
        loadAlunos();
    }, []);

    function formatDate(date: Date) {
        return moment(date).format('DD/MM/YYYY');
    }

    return (
        <div className='container'>
            <br />
            <h1>Página de Alunos</h1>
            <br />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>RA</th>
                        <th>Nascimento</th>
                        <th>Endereço</th>
                        <th>Estudante ativo</th>
                        <th>Ações</th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno => (
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.name}</td>
                            <td>{aluno.ra}</td>
                            <td>{aluno.born_date}</td>
                            <td>{aluno.adress}</td>
                            <td>{aluno.active_student ? "Ativo" : "Não ativo"}</td>
                            <td>{formatDate(aluno.updated_at)}</td>
                            <td>
                                <Button size="sm" variant="primary">Editar</Button>{' '}
                                <Button size="sm" variant="success">Finalizar</Button>{' '}
                                <Button size="sm" variant="warning">Visualizar</Button>{' '}
                                <Button size="sm" variant="danger">Remover</Button>{' '}
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Alunos;