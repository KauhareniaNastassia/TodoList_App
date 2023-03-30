import {v1} from "uuid";
import {todolistApi, TodolistResponseType} from "../api/todolist-api";
import {AppThunkType} from "./store";



const initialState: Array<TodolistDomainType> = []

export const todolistReducer = (state = initialState, action: TodolistActionsType):  Array<TodolistDomainType> => {
    switch (action.type) {
        case "todolist/ADD-TODOLIST": {
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

            return state
    }
}


//==========ACTIONS==============
export const addTodolistAC = (newTodolistTitle: string) => ({
    type: 'todolist/ADD-TODOLIST',
    newTodolistId: v1(),
    newTodolistTitle
}as const)



//==========THUNKS==============

export const addTodolistTC = (newTodolistTitle: string): AppThunkType =>
    async (dispatch) =>  {

        try {
            const res = await todolistApi.addTodolist(newTodolistTitle)
            dispatch(addTodolistAC(res.data.data.item.title))
        } catch (e) {

        }
    }





//==========TYPES==============
export type TodolistActionsType = ReturnType<typeof addTodolistAC>

export type FilterPropsType = 'all' | 'completed' | 'active'
export type TodolistDomainType = TodolistResponseType & {
    filter: FilterPropsType }

