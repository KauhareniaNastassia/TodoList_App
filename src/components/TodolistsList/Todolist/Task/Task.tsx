import React from 'react';
import {TaskResponseType} from "../../../../api/task-api";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from '@material-ui/icons';

export type TaskPropsType = {
    todolistId: string
    task: TaskResponseType
}

export const Task:React.FC<TaskPropsType> = ({todolistId, task}) => {
    return (
        <div key={task.id}>

            {task.title}
            {task.completed}

            <IconButton>
                <Delete/>
            </IconButton>
        </div>
    );
};

