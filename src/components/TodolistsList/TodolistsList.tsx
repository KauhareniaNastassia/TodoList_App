import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {getTodolistsTC} from "../../store/todolist-reducer";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Todolist} from "./Todolist/Todolist";







export const TodolistsList:React.FC = () => {
    const dispatch = useAppDispatch()
    const todolists = useAppSelector(state => state.todolists)
    const tasks = useAppSelector(state => state.tasks)
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)

    useEffect(() => {
        if(!isLoggedIn) {
            return
        }
        dispatch(getTodolistsTC())
    }, [isLoggedIn, dispatch])

    return (
        <div>
            <Grid container spacing={3}>
                {
                    todolists.map(tl => {
                        return <Todolist
                            key={tl.id}
                            todolist={tl}
                            tasks={tasks[tl.id]}
                        />
                    })
                }

            </Grid>
        </div>
    );
};

