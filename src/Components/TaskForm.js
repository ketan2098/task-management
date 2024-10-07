import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { Button, TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            dispatch(addTask(title));
            toast.success('Task added successfully!');
            setTitle('');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                variant="outlined"
                label="New Task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={!title.trim()}>Add Task</Button>

            <ToastContainer position="top-right" autoClose={3000} />
        </form>
    );
};

export default TaskForm;
