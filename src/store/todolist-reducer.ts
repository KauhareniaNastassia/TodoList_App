import {v1} from "uuid";
import {todolistApi, TodolistResponseType} from "../api/todolist-api";
import {AppThunkType} from "./store";
import {setAppStatusAC} from "./app-reducer";


const initialState: Array<TodolistDomainType> = []

export const todolistReducer = (state = initialState, action: TodolistActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case "Todolist/ADD-TODOLIST": {
            return [
                {
                    id: action.newTodolistId,
                    title: action.newTodolistTitle,
                    filter: 'all',
                    addedDate: '',
                    order: 0,
                    //entityStatus: 'idle'
                }, ...state
            ]
        }
        case "Todolist/SET-TODOLISTS": {
            return action.todolists.map(tl => ({...tl, filter: 'all'}))
        }
        default:
            return state
    }
}


//==========ACTIONS==============
export const setTodolistAC = (todolists: TodolistResponseType[]) => ({
    type: 'Todolist/SET-TODOLISTS',
    todolists
} as const)
export const addTodolistAC = (newTodolistTitle: string) => ({
    type: 'Todolist/ADD-TODOLIST',
    newTodolistId: v1(),
    newTodolistTitle
} as const)


//==========THUNKS==============

export const getTodolistsTC = (): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await todolistApi.getTodolists()
            dispatch(setTodolistAC(res.data))
            console.log('getTodolist', res)
            dispatch(setAppStatusAC('succeeded'))
        } catch (e) {

        }
    }

export const addTodolistTC = (newTodolistTitle: string): AppThunkType =>
    async (dispatch) => {

        try {
            const res = await todolistApi.addTodolist(newTodolistTitle)
            dispatch(addTodolistAC(res.data.data.item.title))
        } catch (e) {

        }
    }


//==========TYPES==============
export type TodolistActionsType =
    ReturnType<typeof addTodolistAC> |
    ReturnType<typeof setTodolistAC>


export type FilterPropsType = 'all' | 'completed' | 'active'
export type TodolistDomainType = TodolistResponseType & {
    filter: FilterPropsType
}

