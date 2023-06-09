import React, {useEffect} from 'react';
import {TodolistDomainType} from "../../../store/todolist-reducer";
import {TaskResponseType} from "../../../api/task-api";
import {Task} from "./Task/Task";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {gatTasksTC} from "../../../store/task-reducer";
import {IconButton} from "@mui/material";
import {Delete} from "@material-ui/icons";


type TodolistPropsType = {
    todolist: TodolistDomainType
    tasks: TaskResponseType[]
}

export const Todolist:React.FC<TodolistPropsType> = ({
                                                         todolist,
                                                         tasks
                                  }) => {
    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.app.status)


    useEffect(() => {
        dispatch(gatTasksTC(todolist.id))
    }, [dispatch, todolist.id])

    return (
        <div>
            <h3>
                {todolist.title}
            </h3>
            <IconButton>
                <Delete/>
            </IconButton>


            <div key={todolist.id}>
                {
                    tasks?.map(task => {
                        return (
                            <Task
                                key={task.id}
                                todolistId={todolist.id}
                                task={task}

                            />
                        )
                    })
                }
            </div>
        </div>


    );
};

