import { TaskStatus } from "../enums";

export interface Task {
    id: string,
    titulo: string,
    conteudo: string,
    lista: TaskStatus
}

export interface NewTask {
    titulo: string,
    conteudo: string,
    lista: TaskStatus
}
