import { Request, Response } from 'express';
import fs from 'fs';

const filePath = './jsonEndpoints.json';

// Função para ler o arquivo JSON
const readJsonFile = (): any => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Função para escrever no arquivo JSON
const writeJsonFile = (data: any): void => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// CREATE - Adicionar um novo endpoint
export const createPost = async (req: Request, res: Response): Promise<void> => {
    const newEndpoint = req.body;
    const data = readJsonFile();
    data[0].mainEndpoints.push(newEndpoint);
    writeJsonFile(data);
    res.status(201).send(newEndpoint);
};

// READ - Obter todos os endpoints
export const getIndex = async (req: Request, res: Response): Promise<void> => {
    const data = readJsonFile();
    res.send(data[0].mainEndpoints);
};

// UPDATE - Atualizar um endpoint existente
export const getParamsById = async (req: Request, res: Response): Promise<void> => {
    const endpoint = req.params.endpoint as string;
    const updatedEndpoint = req.body;
    const data = readJsonFile();
    const index = data[0].mainEndpoints.findIndex((ep: any) => ep.endpoint === endpoint);
    if (index !== -1) {
        data[0].mainEndpoints[index] = updatedEndpoint;
        writeJsonFile(data);
        res.send(updatedEndpoint);
    } else {
        res.status(404).send({ message: 'Endpoint not found' });
    }
};

// DELETE - Remover um endpoint
export const getAndDeleteById = async (req: Request, res: Response): Promise<void> => {
    const endpoint = req.params.endpoint as string;
    const data = readJsonFile();
    const index = data[0].mainEndpoints.findIndex((ep: any) => ep.endpoint === endpoint);
    if (index !== -1) {
        const deletedEndpoint = data[0].mainEndpoints.splice(index, 1);
        writeJsonFile(data);
        res.send(deletedEndpoint);
    } else {
        res.status(404).send({ message: 'Endpoint not found' });
    }
};