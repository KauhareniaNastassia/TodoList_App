import {instance} from "./instance";


export const todolistApi = {
    getTodolists() {
        return instance.get<TodolistResponseType[]>('todo-lists')
    },
    addTodolist(title: string) {
        return instance.post<ResponseType< {item: TodolistResponseType} >>('todo-lists', title)
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolistTitle(todolistId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}`, title)
    }

}



//=======TYPES=======

export type TodolistResponseType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}