import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/taskSlice';
import { IconButton, TextField, Typography, Checkbox } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';


const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task?.title);

    const handleEdit = () => {
        if (isEditing) dispatch(editTask({ id: task?.id, title: newTitle }));

        setIsEditing(!isEditing);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Checkbox checked={task?.completed} onChange={() => dispatch(toggleTask(task?.id))} />
            {isEditing ? (
                <TextField value={newTitle} onChange={(e) => setNewTitle(e?.target?.value)} />
            ) : (
                <Typography style={{ textDecoration: task?.completed ? 'line-through' : 'none' }}>
                    {task?.title}
                </Typography>
            )}
            <IconButton onClick={handleEdit}><Edit /></IconButton>
            <IconButton onClick={() => dispatch(deleteTask(task?.id))}><Delete /></IconButton>
        </div>
    );
};

export default TaskItem;
