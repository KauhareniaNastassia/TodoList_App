import {instance} from "./instance";
import {ResponseType} from "./todolist-api";


export const taskApi = {
    getTasks(todolistId: string) {
        return instance.get<TasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<ResponseType< {item: TaskResponseType} >>(`todo-lists/${todolistId}/tasks`, title)
    },
    updateTask(todolistId: string, taskId: string, data: UpdateTaskDataType) {
        return instance.put<ResponseType< {item: TaskResponseType} >>(`todo-lists/${todolistId}/tasks/${taskId}`, data)
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    }

}

//=======TYPES=======

export type TasksResponseType = {
    items: TaskResponseType[]
    totalCount: number
    error: string
}

export type TaskResponseType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type UpdateTaskDataType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}