
const initialState: initialStateType =  {
    isLoggedIn: false
}


export const loginReducer = (state = initialState, action: LoginActionsType): initialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN': {
            return {...state, isLoggedIn: action.isLoggedIn}
        }
        default:
            return state
    }


}




//===========ACTIONS==========
export const setIsLoggedInAC = (isLoggedIn: boolean) => ({
    type: 'login/SET-IS-LOGGED-IN',
    isLoggedIn
}as const)



//===========THUNKS==========
//===========TYPES==========

export type LoginActionsType = ReturnType<typeof setIsLoggedInAC>

export type initialStateType = {
    isLoggedIn: boolean
}