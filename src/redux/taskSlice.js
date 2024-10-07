import { createSlice } from '@reduxjs/toolkit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        filter: 'all',
        searchTerm: '',
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), title: action.payload, completed: false });
        },
        editTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) task.title = action.payload.title;
            toast.success('Task update successfully!');

        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            toast.error('Task delete successfully!');

        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { addTask, editTask, deleteTask, toggleTask, setFilter, setSearchTerm } = taskSlice.actions;
export default taskSlice.reducer;
