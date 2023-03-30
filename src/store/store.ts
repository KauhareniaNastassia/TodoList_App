import React from 'react';
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {TodolistActionsType, todolistReducer} from "./todolist-reducer";

const rootReducer = combineReducers({
    todolists: todolistReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type AppRootStateType = ReturnType<typeof rootReducer> //<typeof store.getState>

export type AppActionsType = TodolistActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>

//@ts-ignore
window.store = store

