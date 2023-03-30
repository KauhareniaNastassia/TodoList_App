import {taskApi, TaskResponseType} from "../api/task-api";
import {AppThunkType} from "./store";


const initialState: TasksPropsType = {}

export const tasksReducer = (state = initialState, action: TasksActionsType): TasksPropsType => {
    switch (action.type) {
        case "tasks/SET-TASKS":
            return {
                ...state,
                [action.todolistId]: action.tasks
            }


        default:
            return state
    }

}


//===========ACTIONS=========
export const setTasksAC = (tasks: TaskResponseType[], todolistId: string) => ({
    type: 'tasks/SET-TASKS',
    tasks,
    todolistId
} as const)


//===========THUNKS===========
export const gatTasksTC = (todolistId: string): AppThunkType =>
    async (dispatch) => {

        try {
            const res = await taskApi.getTasks(todolistId)
            dispatch(setTasksAC(res.data.items, todolistId))
        } catch (e) {

        }
    }


//==========TYPES=========
export type TasksActionsType = ReturnType<typeof setTasksAC>

export type TasksPropsType = {
    [key: string]: TaskResponseType[]
}