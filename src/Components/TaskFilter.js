import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSearchTerm } from '../redux/taskSlice';
import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';

const TaskFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state?.tasks?.filter);

    const handleFilterChange = (_, newFilter) => {
        if (newFilter) dispatch(setFilter(newFilter));
    };

    return (
        <div style={{ marginBottom: '16px' }}>
            <ToggleButtonGroup
                value={filter}
                exclusive
                onChange={handleFilterChange}
                fullWidth
            >
                <ToggleButton value="all">All</ToggleButton>
                <ToggleButton value="completed">Completed</ToggleButton>
                <ToggleButton value="incomplete">Incomplete</ToggleButton>
            </ToggleButtonGroup>
            <TextField
                fullWidth
                variant="outlined"
                label="Search Tasks"
                style={{ marginTop: "0.5rem" }}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
        </div>
    );
};

export default TaskFilter;
