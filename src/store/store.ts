import React from 'react';
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {TodolistActionsType, todolistReducer} from "./todolist-reducer";
import {TasksActionsType, tasksReducer} from "./task-reducer";
import {AppActionType, appReducer} from "./app-reducer";
import {LoginActionsType, loginReducer} from "./login-reducer";

const rootReducer = combineReducers({
    todolists: todolistReducer,
    tasks: tasksReducer,
    app: appReducer,
    login: loginReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type AppRootStateType = ReturnType<typeof rootReducer> //<typeof store.getState>

export type AppActionsType = TodolistActionsType | TasksActionsType | AppActionType | LoginActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>

//@ts-ignore
window.store = store

