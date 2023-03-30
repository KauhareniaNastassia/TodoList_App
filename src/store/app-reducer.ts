import {AppThunkType} from "./store";
import {authApi} from "../api/auth-api";
import {setIsLoggedInAC} from "./login-reducer";


export const initialState: InitialAppStateType = {
    status: 'idle',
    isInitialized: false
}

export const appReducer = (state = initialState, action: AppActionType) => {
    switch (action.type) {
        case "app/SET-IS-INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        case "app/SET-APP-STATUS":
            return {...state, status: action.status}

        default:
            return state
    }
}

//========ACTIONS=========
export const setAppInitializedAC = (isInitialized: boolean) => ({
    type: 'app/SET-IS-INITIALIZED',
    isInitialized
}as const )
export const setAppStatusAC = (status: RequestStatusType) => ({
    type: 'app/SET-APP-STATUS',
    status
}as const)



//========THUNKS=========

export const initializedAppTC = ():AppThunkType =>
    async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
        try {
        const res = await authApi.me()
            if(res.data.resultCode === 0) {
                console.log('initialized', res)
                dispatch(setAppInitializedAC(true))
                dispatch(setIsLoggedInAC(true))
                dispatch(setAppStatusAC('succeeded'))
            }

        } catch(e) {

        }
    }




//========TYPES=========

export type AppActionType =
    ReturnType<typeof setAppInitializedAC> |
    ReturnType<typeof setAppStatusAC>



export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialAppStateType = {
    status: RequestStatusType
    isInitialized: boolean
}